export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  kaspiLink: string;
  images?: string[];  
  price: number;
  installmentPrice: number;
  reviewCount?: number;
} 