export interface Product {
  id: string;
  nameEn: string;
  nameTe: string;
  category: string;
  categoryTe: string;
  price: number;
  unit: string;
  unitTe: string;
  image?: string;
}

export const products: Product[] = [
  // Rice & Grains - అన్నం & ధాన్యాలు
  {
    id: 'rice-basmati',
    nameEn: 'Basmati Rice',
    nameTe: 'బాస్మతి అన్నం',
    category: 'Rice & Grains',
    categoryTe: 'అన్నం & ధాన్యాలు',
    price: 120,
    unit: 'kg',
    unitTe: 'కిలో'
  },
  {
    id: 'rice-sona-masoori',
    nameEn: 'Sona Masoori Rice',
    nameTe: 'సోనమసూరి అన్నం',
    category: 'Rice & Grains',
    categoryTe: 'అన్నం & ధాన్యాలు',
    price: 60,
    unit: 'kg',
    unitTe: 'కిలో'
  },
  {
    id: 'wheat-flour',
    nameEn: 'Wheat Flour',
    nameTe: 'గోధుమ పిండి',
    category: 'Rice & Grains',
    categoryTe: 'అన్నం & ధాన్యాలు',
    price: 40,
    unit: 'kg',
    unitTe: 'కిలో'
  },

  // Pulses - పప్పులు
  {
    id: 'toor-dal',
    nameEn: 'Toor Dal',
    nameTe: 'కందిపప్పు',
    category: 'Pulses',
    categoryTe: 'పప్పులు',
    price: 140,
    unit: 'kg',
    unitTe: 'కిలో'
  },
  {
    id: 'moong-dal',
    nameEn: 'Moong Dal',
    nameTe: 'పెసలు పప్పు',
    category: 'Pulses',
    categoryTe: 'పప్పులు',
    price: 120,
    unit: 'kg',
    unitTe: 'కిలో'
  },
  {
    id: 'chana-dal',
    nameEn: 'Chana Dal',
    nameTe: 'శనగపప్పు',
    category: 'Pulses',
    categoryTe: 'పప్పులు',
    price: 100,
    unit: 'kg',
    unitTe: 'కిలో'
  },

  // Vegetables - కూరగాయలు
  {
    id: 'onion',
    nameEn: 'Onion',
    nameTe: 'ఉల్లిపాయ',
    category: 'Vegetables',
    categoryTe: 'కూరగాయలు',
    price: 30,
    unit: 'kg',
    unitTe: 'కిలో'
  },
  {
    id: 'tomato',
    nameEn: 'Tomato',
    nameTe: 'టమాట',
    category: 'Vegetables',
    categoryTe: 'కూరగాయలు',
    price: 25,
    unit: 'kg',
    unitTe: 'కిలో'
  },
  {
    id: 'potato',
    nameEn: 'Potato',
    nameTe: 'బంగాళాదుంప',
    category: 'Vegetables',
    categoryTe: 'కూరగాయలు',
    price: 20,
    unit: 'kg',
    unitTe: 'కిలో'
  },
  {
    id: 'green-chili',
    nameEn: 'Green Chili',
    nameTe: 'పచ్చిమిర్చి',
    category: 'Vegetables',
    categoryTe: 'కూరగాయలు',
    price: 80,
    unit: 'kg',
    unitTe: 'కిలో'
  },

  // Fruits - పండ్లు
  {
    id: 'banana',
    nameEn: 'Banana',
    nameTe: 'అరటిపండు',
    category: 'Fruits',
    categoryTe: 'పండ్లు',
    price: 50,
    unit: 'dozen',
    unitTe: 'డజను'
  },
  {
    id: 'apple',
    nameEn: 'Apple',
    nameTe: 'ఆపిల్',
    category: 'Fruits',
    categoryTe: 'పండ్లు',
    price: 180,
    unit: 'kg',
    unitTe: 'కిలో'
  },
  {
    id: 'mango',
    nameEn: 'Mango',
    nameTe: 'మామిడిపండు',
    category: 'Fruits',
    categoryTe: 'పండ్లు',
    price: 120,
    unit: 'kg',
    unitTe: 'కిలో'
  },

  // Spices - మసాలాలు
  {
    id: 'turmeric',
    nameEn: 'Turmeric Powder',
    nameTe: 'పసుపు పొడి',
    category: 'Spices',
    categoryTe: 'మసాలాలు',
    price: 200,
    unit: 'kg',
    unitTe: 'కిలో'
  },
  {
    id: 'red-chili',
    nameEn: 'Red Chili Powder',
    nameTe: 'ఎర్రమిర్చి పొడి',
    category: 'Spices',
    categoryTe: 'మసాలాలు',
    price: 300,
    unit: 'kg',
    unitTe: 'కిలో'
  },
  {
    id: 'coriander',
    nameEn: 'Coriander Powder',
    nameTe: 'ధనియాల పొడి',
    category: 'Spices',
    categoryTe: 'మసాలాలు',
    price: 180,
    unit: 'kg',
    unitTe: 'కిలో'
  },

  // Oil & Ghee - నూనె & నెయ్యి
  {
    id: 'sunflower-oil',
    nameEn: 'Sunflower Oil',
    nameTe: 'సూర్యకాంతి నూనె',
    category: 'Oil & Ghee',
    categoryTe: 'నూనె & నెయ్యి',
    price: 150,
    unit: 'liter',
    unitTe: 'లీటర్'
  },
  {
    id: 'coconut-oil',
    nameEn: 'Coconut Oil',
    nameTe: 'కొబ్బరి నూనె',
    category: 'Oil & Ghee',
    categoryTe: 'నూనె & నెయ్యి',
    price: 200,
    unit: 'liter',
    unitTe: 'లీటర్'
  },
  {
    id: 'ghee',
    nameEn: 'Pure Ghee',
    nameTe: 'స్వచ్ఛమైన నెయ్యి',
    category: 'Oil & Ghee',
    categoryTe: 'నూనె & నెయ్యి',
    price: 500,
    unit: 'kg',
    unitTe: 'కిలో'
  }
];

export const categories = Array.from(new Set(products.map(p => p.category)));
export const categoriesTe = Array.from(new Set(products.map(p => p.categoryTe)));