import { NextResponse } from 'next/server';
import { Testimonial } from '@/lib/models';
import { Op } from 'sequelize';

export const dynamic = 'force-dynamic';

// Demo reviews used when no Google Places API key is configured
const DEMO_REVIEWS = [
  {
    id: 'demo_1',
    author_name: 'Priya Sharma',
    rating: 5,
    text: 'Excellent care and very professional staff. Dr. Puri is amazing — highly recommend this clinic to everyone!',
    profile_photo_url: null,
    author_url: null,
    time: Date.now() / 1000,
  },
  {
    id: 'demo_2',
    author_name: 'Rahul Mehta',
    rating: 5,
    text: 'Best skin clinic in the area. The treatment was effective and the staff was very friendly and helpful.',
    profile_photo_url: null,
    author_url: null,
    time: Date.now() / 1000,
  },
  {
    id: 'demo_3',
    author_name: 'Anjali Verma',
    rating: 5,
    text: 'Very thorough consultation and the results are visible within weeks. Highly satisfied.',
    profile_photo_url: null,
    author_url: null,
    time: Date.now() / 1000,
  },
];

async function fetchGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // Treat placeholder values as not configured
  const isConfigured = apiKey && placeId 
    && apiKey !== 'your_api_key_here' 
    && placeId !== 'your_place_id_here';

  if (!isConfigured) {
    console.log('[Sync] No Google Places API key/Place ID configured — using demo reviews');
    return { reviews: DEMO_REVIEWS, isDemo: true };
  }

  try {
    // Google Places API (New) — Place Details
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews&key=${apiKey}&languageCode=en`;
    const res = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews',
      },
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('[Sync] Google Places API error:', errText);
      return { reviews: [], isDemo: false, error: errText };
    }

    const data = await res.json();
    const reviews = (data.reviews || []).map((r) => ({
      id: `gplace_${placeId}_${r.name || r.authorAttribution?.displayName}_${r.publishTime}`,
      author_name: r.authorAttribution?.displayName || 'Anonymous',
      rating: r.rating || 5,
      text: r.originalText?.text || r.text?.text || '',
      profile_photo_url: r.authorAttribution?.photoUri || null,
      author_url: r.authorAttribution?.uri || null,
      time: new Date(r.publishTime).getTime() / 1000,
    }));

    return { reviews, isDemo: false };
  } catch (err) {
    console.error('[Sync] Fetch error:', err);
    return { reviews: [], isDemo: false, error: err.message };
  }
}

export async function GET(request) {
  try {
    // Protect cron endpoint with a secret
    const secret = request.headers.get('x-cron-secret');
    const expectedSecret = process.env.CRON_SECRET;

    // Allow if called internally (no secret configured) or secret matches
    if (expectedSecret && secret !== expectedSecret) {
      // Also allow admin-panel calls (they have cookie auth from middleware)
      const forceAllow = request.headers.get('x-admin-sync') === '1';
      if (!forceAllow) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    const { reviews, isDemo, error } = await fetchGoogleReviews();

    let synced = 0;
    let skipped = 0;
    const errors = [];

    for (const review of reviews) {
      try {
        const reviewId = `${review.id}`;
        
        // Check for existing review
        const existing = await Testimonial.findOne({
          where: { google_review_id: reviewId },
        });

        if (existing) {
          skipped++;
          continue;
        }

        await Testimonial.create({
          author: review.author_name,
          rating: Math.min(5, Math.max(1, Math.round(review.rating))),
          review: review.text,
          source: 'Google',
          is_active: true,
          google_review_id: reviewId,
          avatar_url: review.profile_photo_url || null,
          profile_url: review.author_url || null,
        });

        synced++;
      } catch (e) {
        errors.push(e.message);
      }
    }

    return NextResponse.json({
      success: true,
      synced,
      skipped,
      total: reviews.length,
      isDemo,
      errors: errors.length > 0 ? errors : undefined,
      error: error || undefined,
      syncedAt: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
