"use client";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatPrice, getSubstring } from "@src/helpers";
import { IProduct } from "@src/model";
import Link from "next/link";
import { AddToWishlistButton } from "../Wishlist/AddToWishlistButton";
import { AddToCartButton } from "./AddToCartButton";

type ProductCardProps = {
  product: IProduct;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card w="280px" pos="relative" m="0.5rem" shadow="xl">
      <AddToWishlistButton product={product} />
      <CardBody>
        <Link href={`/products/${product?.category.slug}/${product?.slug}`}>
          <Box
            bg={`center / contain no-repeat url(${product?.mainImage})`}
            borderRadius="lg"
            boxSize="200px"
            mx="auto"
          />
        </Link>
        <Stack
          spacing="3"
          bgColor="brand.primaryHighlight"
          px="1rem"
          py="1rem"
          borderRadius="0.25rem"
        >
          <Flex justify="space-between" align="center">
            <Link href={`/products/${product?.category.slug}/${product?.slug}`}>
              <Heading size="sm" color="brand.primaryDark">
                {getSubstring(product?.name, 25)}
              </Heading>
            </Link>
          </Flex>
          <Text fontSize="sm"> {getSubstring(product?.description, 65)} </Text>
          <Flex
            justifyContent="space-between"
            fontWeight="bold"
            alignItems="center"
          >
            <AddToCartButton product={product} />
            {/* //! */}
            <Text fontSize="lg" color="brand.primary">
              ${formatPrice(product?.price)}
            </Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
