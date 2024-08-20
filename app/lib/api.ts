import axiosInstance from "./axios-instance";

export const fetchBooks = async (
  categories: string[],
  maxRating: any,
  minPrice: number,
  maxPrice: number,
  pageNumber: number,
  pageSize: number
) => {
  const response = await axiosInstance.post("/", {
    categories,
    minRating: maxRating === undefined ? null : maxRating,
    maxRating: maxRating === undefined ? null : maxRating,
    minPrice,
    maxPrice,
    pageNumber,
    pageSize,
  });
  return response.data;
};
