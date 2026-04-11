import { NextResponse } from 'next/server';
import { Service, Blog } from '@/lib/models';

export async function GET() {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // We keep existing services, but force reset blogs
    await Blog.destroy({ where: {} });

    const blogs = [
      {
        title: 'क्या जांघों का कालापन दूर करने के लिए घर पर रखी इन 3 चीजों का इस्तेमाल किया जा सकता है? डॉक्टर से जाने इसके बारे में!',
        slug: 'can-you-use-these-3-homemade-ingredients-to-get-rid-of-dark-thighs',
        excerpt: 'गर्मियों के मौसम में लोगों को त्वचा से जुड़ी तरह-तरह की समस्याओं का सामना करना ही पड़ता है, जिस में त्वचा में टैनिंग होना एक आम सी बात होती हैं, जो किसी भी व्यक्ति को प्रभावित कर सकती है।',
        content: '<p>गर्मियों के मौसम में लोगों को त्वचा से जुड़ी तरह-तरह की समस्याओं का सामना करना ही पड़ता है, जिस में त्वचा में टैनिंग होना एक आम सी बात होती हैं, जो किसी भी व्यक्ति को प्रभावित कर सकती है।</p>',
        image_url: 'https://puriskinclinic.com/wp-content/uploads/2025/12/what-are-fungal-skin-infections-learn-about-their-types-causes-symptoms-and-treatment-scaled.jpg', 
        language: 'hi'
      },
      {
        title: 'डाइबटीज बढ़ने पर त्वचा में कौन -कौन से लक्षण नज़र आ सकते हैं? डॉक्टर से जाने इसके बारे में!',
        slug: 'what-skin-symptoms-can-you-expect-as-diabetes-progresses',
        excerpt: 'शरीर में शुगर लेवल का बढ़ना न केवल शरीर की सेहत के लिए हानिकारक होता है, बल्कि यह त्वचा के लिए भी काफी ज्यादा हानिकारक साबित हो सकता है। दरअसल, शरीर में शुगर लेवल के बढ़ने पर ब्लड फ्लो पर',
        content: '<p>शरीर में शुगर लेवल का बढ़ना न केवल शरीर की सेहत के लिए हानिकारक होता है, बल्कि यह त्वचा के लिए भी काफी ज्यादा हानिकारक साबित हो सकता है। दरअसल, शरीर में शुगर लेवल के बढ़ने पर ब्लड फ्लो पर</p>',
        image_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800',
        language: 'hi'
      },
      {
        title: 'क्या घमौरियों से छुटकारा पाने के लिए इन घरेलू उपायों का इस्तेमाल होता है फायदेमंद? डॉक्टर से जानें इसके बारे में!',
        slug: 'are-these-home-remedies-effective-for-getting-rid-of-prickly-heat',
        excerpt: 'यह सभी जानते हैं, कि मौसम बदलते ही लोगों को तरह -तरह की समस्याओं का सामना करना पड़ता है, चाहे वो समस्या त्वचा से जुड़ी हो या फिर शरीर के किसी अन्य हिस्से से। गर्मियों के मौसम में शरीर की',
        content: '<p>यह सभी जानते हैं, कि मौसम बदलते ही लोगों को तरह -तरह की समस्याओं का सामना करना पड़ता है, चाहे वो समस्या त्वचा से जुड़ी हो या फिर शरीर के किसी अन्य हिस्से से।</p>',
        image_url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800',
        language: 'hi'
      },
      {
        title: 'List of The Top 10 Dermatologists in Ludhiana',
        slug: 'list-of-the-top-10-dermatologists-in-ludhiana',
        excerpt: 'The overall maintenance of the body depends on how you take care of it. The healthier skin provides much confidence from within, and taking care of it is important. When you deal with various skin problems, the first thing you',
        content: '<p>The overall maintenance of the body depends on how you take care of it. The healthier skin provides much confidence from within, and taking care of it is important.</p>',
        image_url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800',
        language: 'en'
      },
      {
        title: 'क्या आप भी जांघों के बार-बार छिलने की समस्या से परेशान रहते हैं? डॉक्टर से जाने इससे बचाव के 4 आसान तरीकों के बारे में!',
        slug: 'do-you-suffer-from-frequent-chafing-on-your-thighs',
        excerpt: 'असल में, गर्मी और बरसात के नमी भरे मौसम में अक्सर ही लोगों को त्वचा से जुड़ी बहुत ही समस्याओं का सामना करना पड़ता है, जिसमें जांघों के बीच की त्वचा का छिल जाना भी शामिल होता है।',
        content: '<p>असल में, गर्मी और बरसात के नमी भरे मौसम में अक्सर ही लोगों को त्वचा से जुड़ी बहुत ही समस्याओं का सामना करना पड़ता है, जिसमें जांघों के बीच की त्वचा का छिल जाना भी शामिल होता है।</p>',
        image_url: 'https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?w=800',
        language: 'hi'
      },
      {
        title: 'क्या हर उम्र में 30 जैसा जवान दिखने के लिए इन 4 एंटी एजिंग टिप्स को अपनाना फायदेमंद हो सकता है? जानें डॉक्टर से',
        slug: 'could-following-these-4-anti-aging-tips-be-beneficial',
        excerpt: 'आज के समय में सभी लोग सुंदर दिखना चाहते हैं और इसके लिए वह कई तरह के उपायों का इस्तेमाल करते हैं और महंगी चीजों को अपने चेहरे पर लगाते हैं। आज के समय में बढ़ती उम्र में भी सुंदर',
        content: '<p>आज के समय में सभी लोग सुंदर दिखना चाहते हैं और इसके लिए वह कई तरह के उपायों का इस्तेमाल करते हैं और महंगी चीजों को अपने चेहरे पर लगाते हैं।</p>',
        image_url: 'https://images.unsplash.com/photo-1598440499115-24bc9b752b9c?w=800',
        language: 'hi'
      }
    ];

    let blogsCreated = 0;
    for (const b of blogs) {
      const [blog, created] = await Blog.findOrCreate({ where: { slug: b.slug }, defaults: b });
      if (created) blogsCreated++;
    }

    return NextResponse.json({ 
      message: `Database seeded securely! Updated exact blog content: Extracted 6 new real blogs.`, 
    });

  } catch (error) {
    console.error('Database seed error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
