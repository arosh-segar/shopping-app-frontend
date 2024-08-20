import useBookStore from "@/app/lib/zustand-store";
import { Flex, Grid, Loader, Notification, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { BsX } from "react-icons/bs";
import BookItemMolecule from "../../molecutles/home/BookItemMolecule";
import PaginationOrganism from "../PaginationOrganism";
import FilterOrganism from "./FilterOrganism";

const BooksOrganism = () => {
  const { books, isGetAllLoading, getAllError, fetchBooks } = useBookStore();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 6,
  });
  const [categories, setCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "name",
      desc: false,
    },
  ]);
  const columns = useMemo(
    () => [
      {
        header: "ID",
        accessorKey: "id",
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Author",
        accessorKey: "author",
      },
      {
        header: "Category",
        accessorKey: "category",
      },
      {
        header: "Price",
        accessorKey: "price",
      },
      {
        header: "Quantity",
        accessorKey: "quantity",
      },
      {
        header: "Image Url",
        accessorKey: "imgUrl",
      },
    ],
    []
  );

  const table = useReactTable({
    data: books,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting: sorting,
      pagination: pagination,
      columnFilters: columnFilters,
    },
  });

  useEffect(() => {
    fetchBooks(categories, rating, priceRange[0], priceRange[1], 1, 100);
  }, [categories, priceRange, rating]);

  useEffect(() => {
    notifications.show({
      title: "Default notification",
      message: "Do not forget to star Mantine on GitHub! 🌟",
    });
  }, []);

  return (
    <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
      <FilterOrganism
        categories={categories}
        priceRange={priceRange}
        rating={rating}
        setCategories={setCategories}
        setPriceRange={setPriceRange}
        setRating={setRating}
      />
      {getAllError && (
        <div className="absolute top-[10%] z-50 mx-auto left-[25%]">
          <Notification w={800} icon={<BsX />} color="red" title="Bummer!">
            {getAllError}
          </Notification>
        </div>
      )}

      {isGetAllLoading ? (
        <Grid.Col span={{ base: 12, md: 6, lg: 9 }}>
          <Flex w="100%" align="center" justify="ceneter" my={50}>
            <Loader color="green" size={45} />
          </Flex>
        </Grid.Col>
      ) : (
        <Grid.Col span={{ base: 12, md: 6, lg: 9 }}>
          {table.getRowModel().flatRows.length > 0 ? (
            <Grid gutter="xl" mt={20}>
              {table.getRowModel().flatRows.map((book) => (
                <BookItemMolecule
                  key={book?.original?.id}
                  book={book?.original}
                />
              ))}
            </Grid>
          ) : (
            <Flex w="100%" my={40} align="center" justify="center">
              <Text fw={500}>No books available</Text>
            </Flex>
          )}
          {table.getPageCount() > 1 && <PaginationOrganism table={table} />}
        </Grid.Col>
      )}
    </Grid>
  );
};

export default BooksOrganism;
