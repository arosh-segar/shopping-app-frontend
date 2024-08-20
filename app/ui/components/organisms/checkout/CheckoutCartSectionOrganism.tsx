import useBookStore from "@/app/lib/zustand-store";
import { Divider, Flex, Grid, Table, Text } from "@mantine/core";
import CheckoutItemSectionMolecule from "../../molecutles/checkout/CheckoutItemSectionMolecule";

const CheckoutCartSectionOrganism = () => {
  const { cartItems, totalCost } = useBookStore();
  return (
    <Grid.Col span={{ base: 12 }}>
      <Flex
        p={30}
        bg="rgba(0, 0, 0, .05)"
        className="rounded-md"
        direction="column"
      >
        <Text size="md" fw={600}>
          Order Summary
        </Text>
        <Table mt={30}>
          <Table.Tbody>
            {cartItems?.map((cartItem) => (
              <CheckoutItemSectionMolecule
                key={cartItem.id}
                cartItem={cartItem}
              />
            ))}
          </Table.Tbody>
        </Table>
        <Flex gap="md" direction="column" mt={50}>
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
        </Flex>
      </Flex>
    </Grid.Col>
  );
};

export default CheckoutCartSectionOrganism;
