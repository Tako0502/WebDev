export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  kaspiLink: string;
  images?: string[];  // Optional array for image gallery
  price: number;
  installmentPrice: number;
  reviewCount?: number;
} 