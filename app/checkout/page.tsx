"use client";
import { Container, MantineProvider } from "@mantine/core";
import theme from "../lib/theme";
import CheckoutOrganism from "../ui/components/organisms/checkout";
import NavbarOrganism from "../ui/components/organisms/navbar";

export default function Checkout() {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive">
        <NavbarOrganism />
        <CheckoutOrganism />
      </Container>
    </MantineProvider>
  );
}
