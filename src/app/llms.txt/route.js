import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Puri Skin Clinic - Ludhiana, Punjab

Puri Skin Clinic is a leading destination for advanced dermatology, hair restoration, and aesthetic medicine in Ludhiana. We combine clinical expertise with international technology standards to deliver superior patient outcomes.

## Core Specializations

- **Aesthetics & Anti-Aging**: Advanced injectables (Botox, Fillers), Ellman Radiofrequency (RFA), and Non-Surgical Facelifts.
- **Hair Restoration**: Specialized in FUE Hair Transplantation, GFC (Growth Factor Concentrate), and PRP therapies for hair loss.
- **Clinical Dermatology**: Professional treatment for Acne, Melasma, Vitiligo, Warts, and benign skin lesions.
- **Laser & Energy Devices**: High-precision Laser Hair Removal and RF Skin Tightening.

## Key Treatment Information

- [Radio-Frequency (RFA) for Moles/Warts](https://puriskinclinic.com/radio-frequency/) - Precise removal with minimal scarring.
- [Mesotherapy for Face & Hair](https://puriskinclinic.com/mesotherapy/) - Nutrient-rich injections for rejuvenation.
- [Hair Transplantation](https://puriskinclinic.com/hair-transplantation/) - Natural-looking hair restoration.
- [Dermal Fillers](https://puriskinclinic.com/fillers/) - Volume restoration and facial contouring.
- [Botox Cosmetic](https://puriskinclinic.com/botox/) - Wrinkle reduction and smooth skin texture.
- [Chemical Peels](https://puriskinclinic.com/chemical-peel/) - Skin resurfacing for glow and pigmentation.
- [Wart Removal](https://puriskinclinic.com/wart-removal-in-ludhiana/) - Quick clinical removal in Ludhiana.
- [Acne Treatment](https://puriskinclinic.com/acne-treatment/) - Expert care for active acne and scars.
- [Melasma Treatment](https://puriskinclinic.com/melasma-treatment/) - Professional pigmentation management.

## Our Technology

- **Ellman Radiofrequency**: The gold standard for precision tissue ablation and removal.
- **Dermapen 4**: Advanced microneedling for skin remodeling.
- **GFC (Growth Factor Concentrate)**: Highly concentrated hair growth therapy.

## Clinical Access

- [Book a Consultation](https://puriskinclinic.com/book-appointment/)
- [About our Doctors](https://puriskinclinic.com/doctors/)
- [Contact Us](https://puriskinclinic.com/contact-us/)
- [Location & Directions](https://puriskinclinic.com/contact-us/)

## Patient Care Philosophy
We focus on minimally invasive procedures that ensure patient comfort and faster recovery times. Every treatment plan is personalized following a comprehensive clinical evaluation.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
