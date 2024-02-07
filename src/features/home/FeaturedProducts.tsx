"use client";
import { Box } from "@chakra-ui/react";
import { SectionHeading } from "@src/components/SectionHeading";
import type { IProduct } from "@src/model";
import React from "react";
import { ProductsSlider } from "./ProductsSlider";

type FeaturedProducts = {
  title: string;
  products: IProduct[];
};

export const FeaturedProducts = ({ title, products }: FeaturedProducts) => {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" p="2rem">
      <SectionHeading title={title} />
      <ProductsSlider products={products} />
    </Box>
  );
};
