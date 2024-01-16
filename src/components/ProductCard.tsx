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
import { getSubstring } from "@src/helpers";
import { IProduct } from "@src/model";
import Link from "next/link";
import { AddToWishlistButton } from "./Wishlist/AddToWishlistButton";
import { AddToCartButton } from "./Cart/AddToCartButton";
import { IProductWithoutRating } from "@src/app/datoBorrar"; //todo: remove IProductWithoutRating

type ProductCardProps = {
  product: IProductWithoutRating; //todo: remove IProductWithoutRating
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card w="280px" pos="relative" m="0.5rem" shadow="xl">
      <AddToWishlistButton /*product={product}*/ />
      <CardBody>
        <Link href={`/products/${product.slug}`}>
          <Box
            bg={`center / contain no-repeat url(${product.mainImage})`}
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
            <Link href={`/products/${product.slug}`}>
              <Heading size="sm">{getSubstring(product.name, 20)}</Heading>
            </Link>
            <Flex color="brand.primaryDark" fontWeight="bold">
              <Text fontSize="md">$ </Text>
              <Text fontSize="lg">{product.price}</Text>
            </Flex>
          </Flex>
          <Text fontSize="sm"> {getSubstring(product.description, 30)} </Text>

          <AddToCartButton product={product} />
        </Stack>
      </CardBody>
    </Card>
  );
};
