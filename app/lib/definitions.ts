export type Book = {
  id: number;
  name: string;
  author: string;
  category: string;
  price: number;
  quantity: number;
  imgUrl: string;
  rating: number;
};

export type CartItem = {
  book: Book;
  quantity: number;
  id: number;
  totalPrice: number;
};

export type ColumnSort = {
  id: string;
  desc: boolean;
};

export type SortingState = ColumnSort[];

export interface ColumnFilter {
  id: string;
  value: unknown;
}

export type ColumnFiltersState = ColumnFilter[];

export interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface ShippingFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
}

export interface FormErrors {
  [key: string]: string;
}
