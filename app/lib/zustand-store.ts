import { create } from "zustand";
import { fetchBooks } from "./api";
import { Book, CartItem } from "./definitions";

type State = {
  cartItems: CartItem[];
  books: Book[];
  totalCost: number;
  isGetAllLoading: boolean;
  getAllError: string | null;
};

type Actions = {
  addItem: (book: Book) => void;
  removeItem: (bookId: number) => void;
  updateQuantity: (bookId: number, quantity: number) => void;
  makeOrder: () => void;
  fetchBooks: (
    categories: string[],
    maxRating: number | undefined,
    minPrice: number,
    maxPrice: number,
    pageNumber: number,
    pageSize: number
  ) => void;
};

const calculateTotalCost = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + item.totalPrice, 0);
};

const useBookStore = create<State & Actions>((set) => ({
  cartItems: [],
  books: [],
  totalCost: 0,
  isGetAllLoading: false,
  getAllError: null,

  addItem: (book: Book) =>
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === book.id);

      let updatedCartItems;
      if (existingItem) {
        updatedCartItems = state.cartItems.map((item) =>
          item.id === book.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.book.price,
              }
            : item
        );
      } else {
        updatedCartItems = [
          ...state.cartItems,
          { book, id: book.id, quantity: 1, totalPrice: book.price * 1 },
        ];
      }
      return {
        cartItems: updatedCartItems,
        totalCost: calculateTotalCost(updatedCartItems),
      };
    }),

  removeItem: (bookId: number) =>
    set((state) => {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== bookId
      );
      return {
        cartItems: updatedCartItems,
        totalCost: calculateTotalCost(updatedCartItems),
      };
    }),

  updateQuantity: (bookId: number, quantity: number) =>
    set((state) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === bookId
          ? {
              ...item,
              quantity: quantity,
              totalPrice: quantity * item.book.price,
            }
          : item
      );
      return {
        cartItems: updatedCartItems,
        totalCost: calculateTotalCost(updatedCartItems),
      };
    }),

  makeOrder: () =>
    set((state) => {
      const updatedBooks = state.books.map((book) => {
        const cartItem = state.cartItems.find((item) => item.id === book.id);
        if (cartItem) {
          return {
            ...book,
            quantity: book.quantity - cartItem.quantity,
          };
        }
        return book;
      });
      return {
        cartItems: [],
        books: updatedBooks,
        totalCost: 0,
      };
    }),

  fetchBooks: async (
    categories,
    maxRating,
    minPrice,
    maxPrice,
    pageNumber,
    pageSize
  ) => {
    set({ isGetAllLoading: true, getAllError: null });
    try {
      const data = await fetchBooks(
        categories,
        maxRating,
        minPrice,
        maxPrice,
        pageNumber,
        pageSize
      );
      set({ books: data.books });
    } catch (error: any) {
      set({ getAllError: error.message || "An error occurred" });
    } finally {
      set({ isGetAllLoading: false });
    }
  },
}));

export default useBookStore;
