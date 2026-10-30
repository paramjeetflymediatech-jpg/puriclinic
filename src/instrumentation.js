// instrumentation.js — runs once on server startup (Next.js 16 App Router)
// Auto-syncs database columns and schedules midnight auto-sync for Google Reviews

export async function register() {
  // Only run in Node.js runtime, not Edge
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const cronSecret = process.env.CRON_SECRET || '';

    // 1. Auto-verify and sync DB columns (author_slug, SEO meta, etc.) on boot
    try {
      const { syncDB } = await import('@/lib/models/index.js');
      await syncDB();
      console.log('[DB] ✅ Database synced and verified on server startup');
    } catch (dbErr) {
      console.warn('[DB] ⚠️ Startup sync warning:', dbErr.message);
    }

    // 2. Schedule midnight Google Reviews sync
    try {
      const cron = await import('node-cron');

      // Schedule: "0 0 * * *" = midnight (00:00) every day
      cron.default.schedule('0 0 * * *', async () => {
        console.log('[AutoSync] ⏰ Midnight cron triggered — syncing Google Reviews...');
        try {
          const res = await fetch(`${appUrl}/api/cron/sync-reviews`, {
            headers: {
              'x-cron-secret': cronSecret,
            },
          });
          const data = await res.json();
          console.log(`[AutoSync] ✅ Done — synced: ${data.synced}, skipped: ${data.skipped}`);
        } catch (err) {
          console.error('[AutoSync] ❌ Sync failed:', err.message);
        }
      });

      console.log('[AutoSync] ✅ Midnight cron scheduler registered (node-cron)');
    } catch {
      // node-cron not installed — use pure JS fallback
      console.warn('[AutoSync] ⚠️  node-cron not found. Using pure-JS midnight scheduler fallback.');
      scheduleMidnightSync(appUrl, cronSecret);
    }
  }
}

function scheduleMidnightSync(appUrl, cronSecret) {
  function getNextMidnightMs() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // next midnight
    return midnight.getTime() - now.getTime();
  }

  function scheduleNext() {
    const msUntilMidnight = getNextMidnightMs();
    console.log(`[AutoSync] Next sync in ${Math.round(msUntilMidnight / 3600000)}h (pure-JS)`);

    setTimeout(async () => {
      console.log('[AutoSync] ⏰ Midnight triggered — syncing Google Reviews...');
      try {
        const res = await fetch(`${appUrl}/api/cron/sync-reviews`, {
          headers: { 'x-cron-secret': cronSecret },
        });
        const data = await res.json();
        console.log(`[AutoSync] ✅ Done — synced: ${data.synced}, skipped: ${data.skipped}`);
      } catch (err) {
        console.error('[AutoSync] ❌ Sync failed:', err.message);
      }
      scheduleNext(); // reschedule for the next midnight
    }, msUntilMidnight);
  }

  scheduleNext();
}
