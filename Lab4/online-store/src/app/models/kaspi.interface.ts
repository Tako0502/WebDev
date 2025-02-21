export interface KaspiResponse {
  data: {
    cards: KaspiProduct[];
  };
}

export interface KaspiProduct {
  id: string;
  title: string;
  unitPrice: number;
  creditMonthlyPrice: number;
  rating: number;
  reviewsQuantity: number;
  previewImages: {
    large: string;
    medium: string;
    small: string;
  }[];
  shopLink: string;
} 