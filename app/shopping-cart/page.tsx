"use client";
import { Container, MantineProvider } from "@mantine/core";
import theme from "../lib/theme";
import BannerOrganism from "../ui/components/organisms/home/BannerOrganism";
import NavbarOrganism from "../ui/components/organisms/navbar";
import ShoppingCartOrganism from "../ui/components/organisms/shopping-cart";

const ShoppingCart = () => {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive">
        <NavbarOrganism />
        <BannerOrganism />
        <ShoppingCartOrganism />
      </Container>
    </MantineProvider>
  );
};

export default ShoppingCart;
