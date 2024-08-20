import { Book } from "@/app/lib/definitions";
import useBookStore from "@/app/lib/zustand-store";
import {
  ActionIcon,
  Card,
  Flex,
  Grid,
  Group,
  Rating,
  Text,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import Image from "next/image";
import { BsBookmarkFill, BsCartFill, BsEyeFill } from "react-icons/bs";

type Props = {
  book: Book;
};

const BookItemMolecule = ({ book }: Props) => {
  const { hovered, ref } = useHover();
  const { addItem, cartItems } = useBookStore();

  const isItemInCart = (itemId: number): boolean => {
    const book = cartItems.find((cartItem) => cartItem.id === itemId);

    if (book === undefined) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <Grid.Col key={book?.id} span={{ base: 12, sm: 4, lg: 4 }}>
      <Card
        ref={ref}
        shadow="sm"
        radius="md"
        withBorder
        className="border relative hover:border-green-500 transition ease-in-out delay-150 duration-200 cursor-pointer"
      >
        <Card.Section p={80} bg="rgba(0, 0, 0, .05)" className="relative">
          <Card.Section>
            <Image
              src={book?.imgUrl}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "200px" }}
              alt={book?.name}
            />
          </Card.Section>
          {hovered && (
            <div className="absolute top-[30%] right-2">
              <Flex
                gap={10}
                justify="flex-start"
                align="flex-start"
                direction="column"
                wrap="wrap"
              >
                <ActionIcon variant="default" aria-label="Settings">
                  <BsEyeFill size={12} color="gray" />
                </ActionIcon>
                <ActionIcon
                  disabled={book?.quantity === 0 || isItemInCart(book?.id)}
                  variant="default"
                  aria-label="Settings"
                  onClick={() => addItem(book)}
                >
                  <BsCartFill size={12} color="gray" />
                </ActionIcon>
                <ActionIcon variant="default" aria-label="Settings">
                  <BsBookmarkFill size={12} color="gray" />
                </ActionIcon>
              </Flex>
            </div>
          )}
        </Card.Section>

        <Flex
          gap={10}
          mt={10}
          justify="flex-start"
          align="flex-start"
          direction="column"
          wrap="wrap"
        >
          <Text fw={500} truncate="end">
            {book?.name}
          </Text>
          <Text fw={400} c="gray" truncate="end" size="sm">
            {`By ${book?.author}`}
          </Text>
        </Flex>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={600} c="green" size="lg">
            {`$ ${book?.price}`}
          </Text>
        </Group>
        <Rating value={book?.rating} readOnly />
      </Card>
    </Grid.Col>
  );
};

export default BookItemMolecule;
