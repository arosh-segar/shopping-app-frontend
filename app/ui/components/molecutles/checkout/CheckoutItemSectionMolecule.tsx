import { CartItem } from "@/app/lib/definitions";
import useBookStore from "@/app/lib/zustand-store";
import { Card, Flex, Table, Text } from "@mantine/core";
import Image from "next/image";

type Props = {
  cartItem: CartItem;
};

const CheckoutItemSectionMolecule = ({ cartItem }: Props) => {
  const { updateQuantity, removeItem } = useBookStore();
  return (
    <Table.Tr key={cartItem.id}>
      <Table.Td>
        <Flex
          justify="flex-start"
          align="center"
          direction="row"
          gap={15}
          wrap="wrap"
        >
          <Card radius="md">
            <Card.Section>
              <Image
                src={cartItem?.book?.imgUrl}
                width={40}
                height={150}
                sizes="100vw"
                alt={cartItem?.book?.name}
              />
            </Card.Section>
          </Card>
          <Text fw={500} size="sm">
            {cartItem?.book?.name}
          </Text>
        </Flex>
      </Table.Td>
      <Table.Td>
        <Flex justify="end" align="center" direction="row" wrap="wrap">
          <Text fw={600}>{`$ ${cartItem.book.price * cartItem.quantity}`}</Text>
        </Flex>
      </Table.Td>
    </Table.Tr>
  );
};

export default CheckoutItemSectionMolecule;
