export interface ProductVariant {
  id: string;
  quantity: string;
  quantityTe: string;
  price: number;
  unit: string;
  unitTe: string;
}

export interface Product {
  id: string;
  nameEn: string;
  nameTe: string;
  category: string;
  categoryTe: string;
  basePrice: number;
  variants: ProductVariant[];
  image: string;
  inStock: boolean;
  description?: string;
  descriptionTe?: string;
}

import basmatiriceImg from '@/assets/basmati-rice.jpg';
import onionsImg from '@/assets/onions.jpg';
import tomatoesImg from '@/assets/tomatoes.jpg';
import bananasImg from '@/assets/bananas.jpg';
import toordalImg from '@/assets/toor-dal.jpg';
import turmericImg from '@/assets/turmeric.jpg';

export const products: Product[] = [
  // Rice & Grains - అన్నం & ధాన్యాలు
  {
    id: 'rice-basmati',
    nameEn: 'Basmati Rice',
    nameTe: 'బాస్మతి అన్నం',
    category: 'Rice & Grains',
    categoryTe: 'అన్నం & ధాన్యాలు',
    basePrice: 30,
    variants: [
      { id: '1', quantity: '250g', quantityTe: '250 గ్రాములు', price: 30, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '500g', sizeTe: '500 గ్రాములు', price: 55, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 120, unit: 'kg', unitTe: 'కిలో' },
      { size: '5kg', sizeTe: '5 కిలోలు', price: 580, unit: 'bag', unitTe: 'బ్యాగ్' },
    ],
    image: basmatiriceImg,
    inStock: true,
    description: 'Premium quality aromatic basmati rice',
    descriptionTe: 'ప్రీమియం నాణ్యత సుగంధ బాస్మతి అన్నం'
  },
  {
    id: 'rice-sona-masoori',
    nameEn: 'Sona Masoori Rice',
    nameTe: 'సోనమసూరి అన్నం',
    category: 'Rice & Grains',
    categoryTe: 'అన్నం & ధాన్యాలు',
    basePrice: 20,
    variants: [
      { size: '500g', sizeTe: '500 గ్రాములు', price: 30, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 60, unit: 'kg', unitTe: 'కిలో' },
      { size: '5kg', sizeTe: '5 కిలోలు', price: 290, unit: 'bag', unitTe: 'బ్యాగ్' },
      { size: '10kg', sizeTe: '10 కిలోలు', price: 580, unit: 'bag', unitTe: 'బ్యాగ్' },
    ],
    image: basmatiriceImg,
    inStock: true
  },
  {
    id: 'wheat-flour',
    nameEn: 'Wheat Flour',
    nameTe: 'గోధుమ పిండి',
    category: 'Rice & Grains',
    categoryTe: 'అన్నం & ధాన్యాలు',
    basePrice: 15,
    variants: [
      { size: '500g', sizeTe: '500 గ్రాములు', price: 20, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 40, unit: 'kg', unitTe: 'కిలో' },
      { size: '5kg', sizeTe: '5 కిలోలు', price: 190, unit: 'bag', unitTe: 'బ్యాగ్' },
      { size: '10kg', sizeTe: '10 కిలోలు', price: 380, unit: 'bag', unitTe: 'బ్యాగ్' },
    ],
    image: basmatiriceImg,
    inStock: true
  },

  // Pulses - పప్పులు
  {
    id: 'toor-dal',
    nameEn: 'Toor Dal',
    nameTe: 'కందిపప్పు',
    category: 'Pulses',
    categoryTe: 'పప్పులు',
    basePrice: 35,
    variants: [
      { size: '250g', sizeTe: '250 గ్రాములు', price: 35, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '500g', sizeTe: '500 గ్రాములు', price: 70, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 140, unit: 'kg', unitTe: 'కిలో' },
      { size: '5kg', sizeTe: '5 కిలోలు', price: 690, unit: 'bag', unitTe: 'బ్యాగ్' },
    ],
    image: toordalImg,
    inStock: true
  },
  {
    id: 'moong-dal',
    nameEn: 'Moong Dal',
    nameTe: 'పెసలు పప్పు',
    category: 'Pulses',
    categoryTe: 'పప్పులు',
    basePrice: 30,
    variants: [
      { size: '250g', sizeTe: '250 గ్రాములు', price: 30, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '500g', sizeTe: '500 గ్రాములు', price: 60, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 120, unit: 'kg', unitTe: 'కిలో' },
    ],
    image: toordalImg,
    inStock: true
  },
  {
    id: 'chana-dal',
    nameEn: 'Chana Dal',
    nameTe: 'శనగపప్పు',
    category: 'Pulses',
    categoryTe: 'పప్పులు',
    basePrice: 25,
    variants: [
      { size: '250g', sizeTe: '250 గ్రాములు', price: 25, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '500g', sizeTe: '500 గ్రాములు', price: 50, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 100, unit: 'kg', unitTe: 'కిలో' },
    ],
    image: toordalImg,
    inStock: true
  },

  // Vegetables - కూరగాయలు
  {
    id: 'onion',
    nameEn: 'Onion',
    nameTe: 'ఉల్లిపాయ',
    category: 'Vegetables',
    categoryTe: 'కూరగాయలు',
    basePrice: 30,
    variants: [
      { size: '1kg', sizeTe: '1 కిలో', price: 30, unit: 'kg', unitTe: 'కిలో' },
      { size: '2kg', sizeTe: '2 కిలోలు', price: 58, unit: 'kg', unitTe: 'కిలో' },
      { size: '5kg', sizeTe: '5 కిలోలు', price: 140, unit: 'bag', unitTe: 'బ్యాగ్' },
    ],
    image: onionsImg,
    inStock: true
  },
  {
    id: 'tomato',
    nameEn: 'Tomato',
    nameTe: 'టమాట',
    category: 'Vegetables',
    categoryTe: 'కూరగాయలు',
    basePrice: 25,
    variants: [
      { size: '500g', sizeTe: '500 గ్రాములు', price: 15, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 25, unit: 'kg', unitTe: 'కిలో' },
      { size: '2kg', sizeTe: '2 కిలోలు', price: 48, unit: 'kg', unitTe: 'కిలో' },
    ],
    image: tomatoesImg,
    inStock: true
  },
  {
    id: 'potato',
    nameEn: 'Potato',
    nameTe: 'బంగాళాదుంప',
    category: 'Vegetables',
    categoryTe: 'కూరగాయలు',
    basePrice: 20,
    variants: [
      { size: '1kg', sizeTe: '1 కిలో', price: 20, unit: 'kg', unitTe: 'కిలో' },
      { size: '2kg', sizeTe: '2 కిలోలు', price: 38, unit: 'kg', unitTe: 'కిలో' },
      { size: '5kg', sizeTe: '5 కిలోలు', price: 90, unit: 'bag', unitTe: 'బ్యాగ్' },
      { size: '10kg', sizeTe: '10 కిలోలు', price: 180, unit: 'bag', unitTe: 'బ్యాగ్' },
    ],
    image: onionsImg,
    inStock: true
  },
  {
    id: 'green-chili',
    nameEn: 'Green Chili',
    nameTe: 'పచ్చిమిర్చి',
    category: 'Vegetables',
    categoryTe: 'కూరగాయలు',
    basePrice: 80,
    variants: [
      { size: '100g', sizeTe: '100 గ్రాములు', price: 8, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '250g', sizeTe: '250 గ్రాములు', price: 20, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '500g', sizeTe: '500 గ్రాములు', price: 40, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 80, unit: 'kg', unitTe: 'కిలో' },
    ],
    image: tomatoesImg,
    inStock: true
  },

  // Fruits - పండ్లు
  {
    id: 'banana',
    nameEn: 'Banana',
    nameTe: 'అరటిపండు',
    category: 'Fruits',
    categoryTe: 'పండ్లు',
    basePrice: 50,
    variants: [
      { size: '6 pcs', sizeTe: '6 అరటిపండ్లు', price: 25, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '12 pcs', sizeTe: '12 అరటిపండ్లు', price: 50, unit: 'dozen', unitTe: 'డజను' },
      { size: '24 pcs', sizeTe: '24 అరటిపండ్లు', price: 95, unit: 'pack', unitTe: 'ప్యాక్' },
    ],
    image: bananasImg,
    inStock: true
  },
  {
    id: 'apple',
    nameEn: 'Apple',
    nameTe: 'ఆపిల్',
    category: 'Fruits',
    categoryTe: 'పండ్లు',
    basePrice: 180,
    variants: [
      { size: '500g', sizeTe: '500 గ్రాములు', price: 90, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 180, unit: 'kg', unitTe: 'కిలో' },
      { size: '2kg', sizeTe: '2 కిలోలు', price: 350, unit: 'kg', unitTe: 'కిలో' },
    ],
    image: bananasImg,
    inStock: true
  },
  {
    id: 'mango',
    nameEn: 'Mango',
    nameTe: 'మామిడిపండు',
    category: 'Fruits',
    categoryTe: 'పండ్లు',
    basePrice: 120,
    variants: [
      { size: '500g', sizeTe: '500 గ్రాములు', price: 60, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 120, unit: 'kg', unitTe: 'కిలో' },
      { size: '2kg', sizeTe: '2 కిలోలు', price: 230, unit: 'kg', unitTe: 'కిలో' },
    ],
    image: bananasImg,
    inStock: true
  },

  // Spices - మసాలాలు
  {
    id: 'turmeric',
    nameEn: 'Turmeric Powder',
    nameTe: 'పసుపు పొడి',
    category: 'Spices',
    categoryTe: 'మసాలాలు',
    basePrice: 50,
    variants: [
      { size: '100g', sizeTe: '100 గ్రాములు', price: 20, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '250g', sizeTe: '250 గ్రాములు', price: 50, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '500g', sizeTe: '500 గ్రాములు', price: 100, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 200, unit: 'kg', unitTe: 'కిలో' },
    ],
    image: turmericImg,
    inStock: true
  },
  {
    id: 'red-chili',
    nameEn: 'Red Chili Powder',
    nameTe: 'ఎర్రమిర్చి పొడి',
    category: 'Spices',
    categoryTe: 'మసాలాలు',
    basePrice: 75,
    variants: [
      { size: '100g', sizeTe: '100 గ్రాములు', price: 30, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '250g', sizeTe: '250 గ్రాములు', price: 75, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '500g', sizeTe: '500 గ్రాములు', price: 150, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 300, unit: 'kg', unitTe: 'కిలో' },
    ],
    image: turmericImg,
    inStock: true
  },
  {
    id: 'coriander',
    nameEn: 'Coriander Powder',
    nameTe: 'ధనియాల పొడి',
    category: 'Spices',
    categoryTe: 'మసాలాలు',
    basePrice: 45,
    variants: [
      { size: '100g', sizeTe: '100 గ్రాములు', price: 18, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '250g', sizeTe: '250 గ్రాములు', price: 45, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '500g', sizeTe: '500 గ్రాములు', price: 90, unit: 'pack', unitTe: 'ప్యాక్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 180, unit: 'kg', unitTe: 'కిలో' },
    ],
    image: turmericImg,
    inStock: true
  },

  // Oil & Ghee - నూనె & నెయ్యి
  {
    id: 'sunflower-oil',
    nameEn: 'Sunflower Oil',
    nameTe: 'సూర్యకాంతి నూనె',
    category: 'Oil & Ghee',
    categoryTe: 'నూనె & నెయ్యి',
    basePrice: 150,
    variants: [
      { size: '500ml', sizeTe: '500 మిల్లీలీటర్లు', price: 75, unit: 'bottle', unitTe: 'బాటిల్' },
      { size: '1L', sizeTe: '1 లీటర్', price: 150, unit: 'bottle', unitTe: 'బాటిల్' },
      { size: '5L', sizeTe: '5 లీటర్లు', price: 720, unit: 'can', unitTe: 'డబ్బా' },
    ],
    image: turmericImg,
    inStock: true
  },
  {
    id: 'coconut-oil',
    nameEn: 'Coconut Oil',
    nameTe: 'కొబ్బరి నూనె',
    category: 'Oil & Ghee',
    categoryTe: 'నూనె & నెయ్యి',
    basePrice: 200,
    variants: [
      { size: '200ml', sizeTe: '200 మిల్లీలీటర్లు', price: 40, unit: 'bottle', unitTe: 'బాటిల్' },
      { size: '500ml', sizeTe: '500 మిల్లీలీటర్లు', price: 100, unit: 'bottle', unitTe: 'బాటిల్' },
      { size: '1L', sizeTe: '1 లీటర్', price: 200, unit: 'bottle', unitTe: 'బాటిల్' },
    ],
    image: turmericImg,
    inStock: true
  },
  {
    id: 'ghee',
    nameEn: 'Pure Ghee',
    nameTe: 'స్వచ్ఛమైన నెయ్యి',
    category: 'Oil & Ghee',
    categoryTe: 'నూనె & నెయ్యి',
    basePrice: 125,
    variants: [
      { size: '200g', sizeTe: '200 గ్రాములు', price: 100, unit: 'jar', unitTe: 'జార్' },
      { size: '500g', sizeTe: '500 గ్రాములు', price: 250, unit: 'jar', unitTe: 'జార్' },
      { size: '1kg', sizeTe: '1 కిలో', price: 500, unit: 'jar', unitTe: 'జార్' },
    ],
    image: turmericImg,
    inStock: true
  }
];

export const categories = Array.from(new Set(products.map(p => p.category)));
export const categoriesTe = Array.from(new Set(products.map(p => p.categoryTe)));