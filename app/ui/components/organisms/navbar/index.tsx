import {
  ActionIcon,
  Anchor,
  Badge,
  Button,
  Divider,
  Flex,
  Group,
  Text,
} from "@mantine/core";
import Link from "next/link";
import { BsCart, BsSearch } from "react-icons/bs";

const NavbarOrganism = () => {
  return (
    <Flex
      py={10}
      gap="md"
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Flex
        gap="md"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Group gap={5}>
          <Text size="xl" fw={700}>
            BOOK
          </Text>
          <Badge color="green">ARC</Badge>
        </Group>

        <Divider size="xs" orientation="vertical" />
        <Text size="md" fw={400}>
          Category
        </Text>
      </Flex>

      <Flex
        gap="xl"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Anchor
          href="#"
          size="sm"
          c="dark"
          fw={400}
          target="_blank"
          underline="never"
        >
          Home
        </Anchor>
        <Anchor
          href="#"
          size="sm"
          c="dark"
          fw={700}
          target="_blank"
          underline="never"
        >
          Shop
        </Anchor>
        <Anchor
          href="#"
          size="sm"
          c="dark"
          fw={400}
          target="_blank"
          underline="never"
        >
          About
        </Anchor>
        <Anchor
          href="#"
          size="sm"
          c="dark"
          fw={400}
          target="_blank"
          underline="never"
        >
          Contact
        </Anchor>
        <ActionIcon variant="transparent" aria-label="Settings">
          <BsSearch size={20} color="black" />
        </ActionIcon>
        <Link href="/shopping-cart">
          <ActionIcon variant="transparent" aria-label="Settings">
            <BsCart size={20} color="black" />
          </ActionIcon>
        </Link>

        <Flex
          gap="sm"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Button variant="filled" color="gray">
            <Text size="sm" fw={500} c="dark">
              Sign in
            </Text>
          </Button>
          <Button variant="filled" color="green">
            <Text size="sm" fw={500} c="dark">
              Register
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavbarOrganism;
