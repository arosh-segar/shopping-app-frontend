import { CartItem } from "@/app/lib/definitions";
import useBookStore from "@/app/lib/zustand-store";
import {
  ActionIcon,
  Card,
  Flex,
  NumberInput,
  Table,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { BsDash, BsPlus, BsTrashFill } from "react-icons/bs";

type Props = {
  cartItem: CartItem;
};

const CartItemSectionMolecule = ({ cartItem }: Props) => {
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
            <Card.Section p={20} bg="rgba(0, 0, 0, .05)">
              <Image
                src={cartItem?.book?.imgUrl}
                width={50}
                height={150}
                sizes="100vw"
                alt={cartItem?.book?.name}
              />
            </Card.Section>
          </Card>
          <Text fw={500} truncate="end">
            {cartItem?.book?.name}
          </Text>
        </Flex>
      </Table.Td>
      <Table.Td>
        <Text fw={600}>{`$ ${cartItem.book.price}`}</Text>
      </Table.Td>
      <Table.Td>
        <div className="flex items-center space-x-3">
          <ActionIcon
            onClick={() => {
              if (cartItem.quantity > 1)
                updateQuantity(cartItem.book.id, cartItem.quantity - 1);
            }}
            color="gray"
            variant="transparent"
            aria-label="Settings"
          >
            <BsDash
              color="gray"
              style={{ width: "70%", height: "70%" }}
              className="stroke-1"
            />
          </ActionIcon>

          <NumberInput
            w={100}
            value={cartItem.quantity}
            clampBehavior="strict"
            min={1}
            max={cartItem.book.quantity}
            onChange={(value) => {
              if (parseInt(value.toString()) <= cartItem.book.quantity) {
                if (parseInt(value.toString()) > cartItem.book.quantity) {
                  updateQuantity(cartItem.book.id, parseInt(value.toString()));
                }

                if (parseInt(value.toString()) < cartItem.book.quantity) {
                  updateQuantity(cartItem.book.id, parseInt(value.toString()));
                }
              }
            }}
          />
          <ActionIcon
            onClick={() => {
              if (cartItem.quantity < cartItem.book.quantity)
                updateQuantity(cartItem.book.id, cartItem.quantity + 1);
            }}
            variant="transparent"
            color="gray"
            aria-label="Settings"
          >
            <BsPlus
              style={{ width: "70%", height: "70%" }}
              className="stroke-1"
              color="gray"
            />
          </ActionIcon>
        </div>
      </Table.Td>
      <Table.Td>
        <Text fw={600}>{`$ ${cartItem.book.price * cartItem.quantity}`}</Text>
      </Table.Td>
      <Table.Td>
        <ActionIcon
          onClick={() => {
            removeItem(cartItem?.book?.id);
          }}
          variant="transparent"
          aria-label="Settings"
          size="sm"
        >
          <BsTrashFill color="red" style={{ width: "70%", height: "70%" }} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  );
};

export default CartItemSectionMolecule;
