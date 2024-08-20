import { Book } from "@/app/lib/definitions";
import { Flex, Pagination } from "@mantine/core";
import { Table } from "@tanstack/react-table";

type Props = {
  table: Table<Book>;
};

const PaginationOrganism = ({ table }: Props) => {
  return (
    <Flex my={100} justify="center" align="center" direction="row" wrap="wrap">
      <Pagination
        color="green"
        total={table.getPageCount()}
        value={table.getState().pagination.pageIndex + 1}
        onChange={(value) => table.setPageIndex(value - 1)}
      />
    </Flex>
  );
};

export default PaginationOrganism;
