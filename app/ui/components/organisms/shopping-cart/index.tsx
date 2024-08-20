import useBookStore from "@/app/lib/zustand-store";
import { Button, Divider, Flex, Grid, Table, Text } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsCheckCircleFill } from "react-icons/bs";
import CartItemSectionMolecule from "../../molecutles/cart/CartItemSectionMolecule";

const ShoppingCartOrganism = () => {
  const { push } = useRouter();
  const { cartItems, totalCost } = useBookStore();

  return (
    <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }} my={80}>
      <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
        <Table.ScrollContainer minWidth={500}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th fw={500}>Product</Table.Th>
                <Table.Th fw={500}>Price</Table.Th>
                <Table.Th fw={500}>Quantity</Table.Th>
                <Table.Th fw={500}>Total</Table.Th>
                <Table.Th fw={500}></Table.Th>
              </Table.Tr>
            </Table.Thead>
            {cartItems?.length ? (
              <Table.Tbody>
                {cartItems.map((cartItem) => (
                  <CartItemSectionMolecule
                    key={cartItem.id}
                    cartItem={cartItem}
                  />
                ))}
              </Table.Tbody>
            ) : (
              <Flex justify="center" align="center" direction="row" my={20}>
                <Text size="lg" fw={400}>
                  There are no books in the cart at the moment!
                </Text>
              </Flex>
            )}
          </Table>
        </Table.ScrollContainer>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
        <Flex
          bg="rgba(0, 0, 0, .05)"
          gap="md"
          direction="column"
          p={30}
          className="rounded-md"
        >
          <Flex
            justify="space-between"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Text c="gray" size="md" fw={500}>
              Subtotals:
            </Text>
            <Text c="gray" fw={600}>{`$ ${totalCost}`}</Text>
          </Flex>
          <Divider my={0} />
          <Flex
            justify="space-between"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Text c="dark" size="md" fw={600}>
              Totals:
            </Text>
            <Text c="green" fw={600}>{`$ ${totalCost}`}</Text>
          </Flex>
          <Flex gap={10} align="center" direction="row" wrap="wrap">
            <BsCheckCircleFill className="text-green-500" />
            <Text size="xs" fw={400}>
              Shipping and taxes calculated at checkout
            </Text>
          </Flex>
          <Link href="/checkout">
            <Button variant="filled" color="green" mt={20}>
              <Text size="sm" fw={500} c="dark">
                Proceed to checkout
              </Text>
            </Button>
          </Link>
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default ShoppingCartOrganism;
