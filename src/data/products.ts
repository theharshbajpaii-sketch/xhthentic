import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'essential-white-tee',
    name: 'Essential White Tee',
    subtitle: 'Classic Crew · 240 GSM Combed Cotton',
    price: 1899,
    description:
      'The foundational layer perfected. Cut from high-density 240 GSM combed cotton jersey, offering substantial drape without stiffness. Features a reinforced ribbed collar that preserves its neckline through countless wears.',
    fabricDetails: [
      '100% long-staple combed cotton',
      '240 GSM heavyweight tight-knit jersey',
      'Pre-washed to minimize shrinkage',
      'Seamless tubular side construction',
      'Tonal micro-stitch neckline finish'
    ],
    fit: 'Regular',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/product-white.jpg',
    badge: 'SIGNATURE ESSENTIAL',
    colors: [
      { name: 'Optic White', hex: '#FDFDFD', image: '/images/product-white.jpg' },
      { name: 'Jet Black', hex: '#161616', image: '/images/product-black.jpg' },
      { name: 'Stone', hex: '#D6CEC2', image: '/images/product-stone.jpg' }
    ]
  },
  {
    id: 'essential-black-tee',
    name: 'Essential Black Tee',
    subtitle: 'Classic Crew · Deep Vat-Dyed Black',
    price: 1899,
    description:
      'Deep, rich black engineered to resist washing fade. Cut in our timeless regular silhouette with slightly relaxed shoulders and a clean fall along the torso. A staple designed for understated sophistication.',
    fabricDetails: [
      '100% combed ring-spun cotton',
      '240 GSM heavy jersey',
      'Colorfast vat dye process',
      'Internal taped shoulder seams for comfort',
      'Pre-shrunk dimensional stability'
    ],
    fit: 'Regular',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/product-black.jpg',
    badge: 'BESTSELLER',
    colors: [
      { name: 'Jet Black', hex: '#161616', image: '/images/product-black.jpg' },
      { name: 'Optic White', hex: '#FDFDFD', image: '/images/product-white.jpg' },
      { name: 'Charcoal', hex: '#3E4143', image: '/images/product-charcoal.jpg' }
    ]
  },
  {
    id: 'stone-oversized-tee',
    name: 'Stone Oversized Tee',
    subtitle: 'Relaxed Silhouette · Architectural Drape',
    price: 2299,
    description:
      'A study in contemporary proportion. Tailored with dropped shoulders, elongated elbow-length sleeves, and a wider body that moves with effortless poise. Cast in an earthy mineral stone tone.',
    fabricDetails: [
      '100% combed cotton jersey',
      '260 GSM heavy organic knit',
      'Relaxed dropped shoulder pattern',
      'Reinforced twin-needle cuffs',
      'Gentle enzyme-washed handle'
    ],
    fit: 'Oversized',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/product-stone.jpg',
    badge: 'NEW DROP',
    colors: [
      { name: 'Stone', hex: '#D6CEC2', image: '/images/product-stone.jpg' },
      { name: 'Sand', hex: '#CBBFA8', image: '/images/product-sand.jpg' },
      { name: 'Charcoal', hex: '#3E4143', image: '/images/product-charcoal.jpg' }
    ]
  },
  {
    id: 'charcoal-essential-tee',
    name: 'Charcoal Essential Tee',
    subtitle: 'Classic Crew · Washed Mineral Shade',
    price: 1999,
    description:
      'A versatile tonal alternative to pure black. The charcoal hue provides subtle visual depth, pairing naturally with tailored trousers or casual denim. Crafted with our signature weighted drape.',
    fabricDetails: [
      '100% combed long-staple cotton',
      '240 GSM tight weave',
      'Mineral pigment-washed finish',
      'Bound ribbed collar that retains shape',
      'Soft-touch natural cotton hand'
    ],
    fit: 'Regular',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/product-charcoal.jpg',
    colors: [
      { name: 'Charcoal', hex: '#3E4143', image: '/images/product-charcoal.jpg' },
      { name: 'Jet Black', hex: '#161616', image: '/images/product-black.jpg' },
      { name: 'Optic White', hex: '#FDFDFD', image: '/images/product-white.jpg' }
    ]
  },
  {
    id: 'vintage-olive-boxy-tee',
    name: 'Vintage Olive Boxy Tee',
    subtitle: 'Boxy Cut · Muted Earth Tone',
    price: 2199,
    description:
      'Structured boxy fit featuring a subtly cropped hem that rests cleanly at the beltline. Cut with wider sleeves and a high ribbed neckline for a modern streetwear-meets-luxury silhouette.',
    fabricDetails: [
      '100% combed cotton',
      '250 GSM structured jersey',
      'Boxy modern torso profile',
      'Reinforced shoulder-to-shoulder taping',
      'Earthy muted olive palette'
    ],
    fit: 'Boxy',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/product-olive.jpg',
    badge: 'LIMITED EDITION',
    colors: [
      { name: 'Vintage Olive', hex: '#585C42', image: '/images/product-olive.jpg' },
      { name: 'Stone', hex: '#D6CEC2', image: '/images/product-stone.jpg' },
      { name: 'Charcoal', hex: '#3E4143', image: '/images/product-charcoal.jpg' }
    ]
  },
  {
    id: 'heather-sand-heavyweight-tee',
    name: 'Heather Sand Heavyweight Tee',
    subtitle: 'Heavyweight Series · Warm Oatmeal Melange',
    price: 2499,
    description:
      'Our heaviest fabric yet. Spun with a micro-heather textured yarn that offers rich visual warmth and tactile substance. Designed to drape cleanly without clinging, perfect for year-round wear.',
    fabricDetails: [
      '100% cotton heather knit',
      '280 GSM ultra-heavyweight jersey',
      'Micro-flecked natural sand texture',
      'High-gauge ribbed collar with double stitch',
      'Preshrunk for permanent fit integrity'
    ],
    fit: 'Heavyweight',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/product-sand.jpg',
    colors: [
      { name: 'Heather Sand', hex: '#CBBFA8', image: '/images/product-sand.jpg' },
      { name: 'Optic White', hex: '#FDFDFD', image: '/images/product-white.jpg' },
      { name: 'Jet Black', hex: '#161616', image: '/images/product-black.jpg' }
    ]
  }
];

export const BRAND_INFO = {
  name: 'XHTHENTIC',
  tagline: "IT'S NOT A LOGO. IT'S A VIBE.",
  heroHeadline: 'LESS, BUT BETTER.',
  heroSubheadline: 'Everyday essentials. Considered design. Made to be worn on repeat.',
  heroCTA: 'SHOP THE COLLECTION',
  announcement: 'INTRODUCING THE EVERYDAY ESSENTIALS · COMPLIMENTARY SHIPPING ACROSS INDIA',
  philosophyHeadline: 'THE ART OF KEEPING IT SIMPLE.',
  campaignHeadline: 'MADE FOR YOUR EVERYDAY.',
  newsletterHeadline: 'STAY IN THE LOOP.'
};
