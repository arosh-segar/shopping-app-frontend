import { ActionIcon, Anchor, Flex, Group, Text } from "@mantine/core";
import { BsHouse } from "react-icons/bs";

const BannerOrganism = () => {
  return (
    <Flex
      bg="rgba(0, 0, 0, .05)"
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
      py={40}
      my={30}
      className="rounded-md"
    >
      <Group gap={10}>
        <Group gap={0}>
          <ActionIcon variant="transparent" aria-label="Settings">
            <BsHouse size={15} color="gray" />
          </ActionIcon>
          <Anchor
            href="#"
            size="sm"
            c="gray"
            fw={400}
            target="_blank"
            underline="never"
          >
            Home
          </Anchor>
        </Group>
        /
        <Anchor
          href="#"
          c="dark"
          fw={500}
          size="sm"
          target="_blank"
          underline="never"
        >
          Shop Page
        </Anchor>
      </Group>
      <Group gap={10}>
        <Text size="40px" fw={600}>
          Read and add your{" "}
        </Text>
        <Text size="40px" c="green" fw={600}>
          insight
        </Text>
      </Group>
      <Text size="md" mt={10}>
        Find your favorite book and read it here for free
      </Text>
    </Flex>
  );
};

export default BannerOrganism;
