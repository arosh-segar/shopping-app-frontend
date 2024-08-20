"use client";
import { Container, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import theme from "./lib/theme";
import BannerOrganism from "./ui/components/organisms/home/BannerOrganism";
import BooksOrganism from "./ui/components/organisms/home/BooksOrganism";
import NavbarOrganism from "./ui/components/organisms/navbar";

export default function Home() {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive">
        <NavbarOrganism />
        <BannerOrganism />
        <BooksOrganism />
      </Container>
    </MantineProvider>
  );
}
