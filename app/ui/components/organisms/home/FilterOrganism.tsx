import { categoriesOptions } from "@/app/lib/placeholder-data";
import { Checkbox, Flex, Grid, RangeSlider, Rating, Text } from "@mantine/core";

type Props = {
  categories: string[];
  priceRange: [number, number];
  rating: number | undefined;
  setCategories: (categories: string[]) => void;
  setPriceRange: (priceRange: [number, number]) => void;
  setRating: (categories: number | undefined) => void;
};
const FilterOrganism = ({
  categories,
  priceRange,
  rating,
  setCategories,
  setPriceRange,
  setRating,
}: Props) => {
  const categoriesValues = categoriesOptions;
  return (
    <Grid.Col span={{ base: 12, md: 6, lg: 3 }} mb={50}>
      <Flex
        gap="md"
        justify="start"
        align="start"
        direction="column"
        wrap="wrap"
      >
        <Text size="md" fw={600}>
          Books Category
        </Text>
        <Checkbox.Group value={categories} onChange={setCategories}>
          {categoriesValues.map((category: any, index) => (
            <Checkbox
              color="green"
              key={index}
              value={category.value}
              label={category.label}
              mb={10}
            />
          ))}
        </Checkbox.Group>
      </Flex>
      <Flex
        gap="md"
        justify="start"
        align="start"
        direction="column"
        wrap="wrap"
        mt={30}
      >
        <Text size="md" fw={600}>
          Books Rating
        </Text>
        <Rating
          color="green"
          value={rating}
          onChange={(value) => setRating(value)}
        />
      </Flex>
      <Flex justify="start" align="start" direction="column" my={30}>
        <Text size="md" fw={600}>
          Books Rating
        </Text>
      </Flex>
      <RangeSlider
        marks={[{ value: 500, label: "$ 500" }]}
        step={1}
        min={0}
        max={500}
        labelAlwaysOn
        value={priceRange}
        color="green"
        onChange={(value) => {
          setPriceRange(value);
        }}
      />
    </Grid.Col>
  );
};

export default FilterOrganism;
