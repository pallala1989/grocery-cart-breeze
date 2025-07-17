
export interface ProductVariant {
  id: string;
  size: string;
  sizeTe: string;
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
      { id: '1', size: '250g', sizeTe: '250 గ్రాములు', price: 30, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '2', size: '500g', sizeTe: '500 గ్రాములు', price: 55, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '3', size: '1kg', sizeTe: '1 కిలో', price: 120, unit: 'kg', unitTe: 'కిలో' },
      { id: '4', size: '5kg', sizeTe: '5 కిలోలు', price: 580, unit: 'bag', unitTe: 'బ్యాగ్' },
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
      { id: '1', size: '500g', sizeTe: '500 గ్రాములు', price: 30, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '2', size: '1kg', sizeTe: '1 కిలో', price: 60, unit: 'kg', unitTe: 'కిలో' },
      { id: '3', size: '5kg', sizeTe: '5 కిలోలు', price: 290, unit: 'bag', unitTe: 'బ్యాగ్' },
      { id: '4', size: '10kg', sizeTe: '10 కిలోలు', price: 580, unit: 'bag', unitTe: 'బ్యాగ్' },
    ],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
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
      { id: '1', size: '500g', sizeTe: '500 గ్రాములు', price: 20, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '2', size: '1kg', sizeTe: '1 కిలో', price: 40, unit: 'kg', unitTe: 'కిలో' },
      { id: '3', size: '5kg', sizeTe: '5 కిలోలు', price: 190, unit: 'bag', unitTe: 'బ్యాగ్' },
      { id: '4', size: '10kg', sizeTe: '10 కిలోలు', price: 380, unit: 'bag', unitTe: 'బ్యాగ్' },
    ],
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
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
      { id: '1', size: '250g', sizeTe: '250 గ్రాములు', price: 35, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '2', size: '500g', sizeTe: '500 గ్రాములు', price: 70, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '3', size: '1kg', sizeTe: '1 కిలో', price: 140, unit: 'kg', unitTe: 'కిలో' },
      { id: '4', size: '5kg', sizeTe: '5 కిలోలు', price: 690, unit: 'bag', unitTe: 'బ్యాగ్' },
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
      { id: '1', size: '250g', sizeTe: '250 గ్రాములు', price: 30, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '2', size: '500g', sizeTe: '500 గ్రాములు', price: 60, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '3', size: '1kg', sizeTe: '1 కిలో', price: 120, unit: 'kg', unitTe: 'కిలో' },
    ],
    image: 'https://images.unsplash.com/photo-1599909533715-c1e23e54e31c?w=400&h=300&fit=crop',
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
      { id: '1', size: '250g', sizeTe: '250 గ్రాములు', price: 25, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '2', size: '500g', sizeTe: '500 గ్రాములు', price: 50, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '3', size: '1kg', sizeTe: '1 కిలో', price: 100, unit: 'kg', unitTe: 'కిలో' },
    ],
    image: 'https://images.unsplash.com/photo-1493652602463-87c7cc98b8a1?w=400&h=300&fit=crop',
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
      { id: '1', size: '1kg', sizeTe: '1 కిలో', price: 30, unit: 'kg', unitTe: 'కిలో' },
      { id: '2', size: '2kg', sizeTe: '2 కిలోలు', price: 58, unit: 'kg', unitTe: 'కిలో' },
      { id: '3', size: '5kg', sizeTe: '5 కిలోలు', price: 140, unit: 'bag', unitTe: 'బ్యాగ్' },
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
      { id: '1', size: '500g', sizeTe: '500 గ్రాములు', price: 15, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '2', size: '1kg', sizeTe: '1 కిలో', price: 25, unit: 'kg', unitTe: 'కిలో' },
      { id: '3', size: '2kg', sizeTe: '2 కిలోలు', price: 48, unit: 'kg', unitTe: 'కిలో' },
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
      { id: '1', size: '1kg', sizeTe: '1 కిలో', price: 20, unit: 'kg', unitTe: 'కిలో' },
      { id: '2', size: '2kg', sizeTe: '2 కిలోలు', price: 38, unit: 'kg', unitTe: 'కిలో' },
      { id: '3', size: '5kg', sizeTe: '5 కిలోలు', price: 90, unit: 'bag', unitTe: 'బ్యాగ్' },
      { id: '4', size: '10kg', sizeTe: '10 కిలోలు', price: 180, unit: 'bag', unitTe: 'బ్యాగ్' },
    ],
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop',
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
      { id: '1', size: '6 pcs', sizeTe: '6 అరటిపండ్లు', price: 25, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '2', size: '12 pcs', sizeTe: '12 అరటిపండ్లు', price: 50, unit: 'dozen', unitTe: 'డజను' },
      { id: '3', size: '24 pcs', sizeTe: '24 అరటిపండ్లు', price: 95, unit: 'pack', unitTe: 'ప్యాక్' },
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
      { id: '1', size: '500g', sizeTe: '500 గ్రాములు', price: 90, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '2', size: '1kg', sizeTe: '1 కిలో', price: 180, unit: 'kg', unitTe: 'కిలో' },
      { id: '3', size: '2kg', sizeTe: '2 కిలోలు', price: 350, unit: 'kg', unitTe: 'కిలో' },
    ],
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop',
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
      { id: '1', size: '100g', sizeTe: '100 గ్రాములు', price: 20, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '2', size: '250g', sizeTe: '250 గ్రాములు', price: 50, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '3', size: '500g', sizeTe: '500 గ్రాములు', price: 100, unit: 'pack', unitTe: 'ప్యాక్' },
      { id: '4', size: '1kg', sizeTe: '1 కిలో', price: 200, unit: 'kg', unitTe: 'కిలో' },
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
      { id: '1', size: '500ml', sizeTe: '500 మిల్లీలీటర్లు', price: 75, unit: 'bottle', unitTe: 'బాటిల్' },
      { id: '2', size: '1L', sizeTe: '1 లీటర్', price: 150, unit: 'bottle', unitTe: 'బాటిల్' },
      { id: '3', size: '5L', sizeTe: '5 లీటర్లు', price: 720, unit: 'can', unitTe: 'డబ్బా' },
    ],
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop',
    inStock: true
  }
];

export const categories = Array.from(new Set(products.map(p => p.category)));
export const categoriesTe = Array.from(new Set(products.map(p => p.categoryTe)));
