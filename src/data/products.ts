export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
  category: string;
}

export interface Category {
  name: string;
  image: string;
  slug: string;
}

export const categories: Category[] = [
  {
    name: 'Headbands',
    slug: 'headbands',
    image: 'https://images.pexels.com/photos/5845784/pexels-photo-5845784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Bonnets',
    slug: 'bonnets',
    image: 'https://images.pexels.com/photos/7897135/pexels-photo-7897135.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Robes',
    slug: 'robes',
    image: 'https://images.pexels.com/photos/16455805/pexels-photo-16455805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Scrunchies',
    slug: 'scrunchies',
    image: 'https://images.pexels.com/photos/6044135/pexels-photo-6044135.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Sleep Masks',
    slug: 'sleep-masks',
    image: 'https://images.pexels.com/photos/6541087/pexels-photo-6541087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'House Shoes',
    slug: 'house-shoes',
    image: 'https://images.pexels.com/photos/12969102/pexels-photo-12969102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const bestsellers: Product[] = [
  {
    id: 1,
    name: 'Rose Satin Sleep Bonnet',
    price: 1500,
    category: 'Bonnets',
    image: 'https://images.pexels.com/photos/7897135/pexels-photo-7897135.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    colors: ['#FFB3D9', '#7A4E58', '#3A2F31'],
  },
  {
    id: 2,
    name: 'Luxe Champagne Robe',
    price: 4500,
    category: 'Robes',
    image: 'https://images.pexels.com/photos/16455805/pexels-photo-16455805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    colors: ['#E9D8B8', '#FFB3D9', '#FBF7F2'],
  },
  {
    id: 3,
    name: 'Silk Scrunchie Trio',
    price: 1200,
    category: 'Scrunchies',
    image: 'https://images.pexels.com/photos/6044135/pexels-photo-6044135.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    colors: ['#FFB3D9', '#E9D8B8', '#7A4E58'],
  },
  {
    id: 4,
    name: 'Soft Touch Headband',
    price: 800,
    category: 'Headbands',
    image: 'https://images.pexels.com/photos/5845784/pexels-photo-5845784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    colors: ['#FFB3D9', '#FBF7F2', '#E9D8B8'],
  },
  {
    id: 5,
    name: 'Dream Satin Sleep Mask',
    price: 950,
    category: 'Sleep Masks',
    image: 'https://images.pexels.com/photos/6541087/pexels-photo-6541087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    colors: ['#FFB3D9', '#7A4E58', '#3A2F31'],
  },
  {
    id: 6,
    name: 'Cloud Warm House Shoes',
 price: 1800,
    category: 'House Shoes',
    image: 'https://images.pexels.com/photos/12969102/pexels-photo-12969102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    colors: ['#E9D8B8', '#FFB3D9', '#FBF7F2'],
  },
];

export const formatKES = (amount: number): string => {
  return `KES ${amount.toLocaleString('en-KE')}`;
};
