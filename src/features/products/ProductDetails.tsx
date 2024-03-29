"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";

import { AddToCartButton } from "@src/components/Card/AddToCartButton";
import { CustomBreadcrumb } from "@src/components/CustomBreadcrumb";
import { Quantity } from "@src/components/Quantity/Quantity";
import { AppContext } from "@src/context/AppContext";
import { formatPrice, getSubstring } from "@src/helpers";
import { IBreadcrumbItem, IProduct } from "@src/model";
import React, { useContext, useState } from "react";
import { AddToWishlistButton } from "@src/components/Wishlist/AddToWishlistButton";
import Link from "next/link";
import ImageGallery from "./ImageGallery";

type ProductDetailsProps = {
  product: IProduct;
};

const items: IBreadcrumbItem[] = [
  {
    name: "Products",
    link: "/products",
  },
];

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const { isAdded, addItem, resetItems } = useContext(AppContext);

  return (
    <>
      <CustomBreadcrumb
        items={[
          ...items,
          {
            name: product?.category.name,
            link: `/products/${product?.category.slug}`,
          },
          {
            name: getSubstring(product?.name, 20),
            link: `/products/${product?.category.slug}/${product?.slug}`,
          },
        ]}
      />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        p="2rem"
        gap="15"
      >
        <GridItem p="1rem" pos="relative">
          <AddToWishlistButton product={product} />

          <ImageGallery product={product} />
        </GridItem>
        <GridItem p="1rem">
          <Heading>{product?.name}</Heading>
          <Text my="1rem">{product?.description}</Text>

          <Text fontWeight="bold" fontSize="2rem">
            &#8370;{formatPrice(product?.price)}
          </Text>
          <Divider my="1rem" />
          <Quantity
            setQuantity={(_valueAsString, valueAsNumber) =>
              setQuantity(valueAsNumber)
            }
            disabled={isAdded("cart", product?.id)}
          />
          <Divider my="1rem" />
          <Box>
            <Link href="/checkout">
              <Button
                variant="outline"
                bgColor="brand.primary"
                color="white"
                borderRadius="0.25rem"
                shadow="md"
                size="sm"
                w="130px"
                mr="1rem"
                my="0.5rem"
                _hover={{ bgColor: "brand.primaryLight" }}
                onClick={() => {
                  resetItems("checkout");
                  addItem("checkout", product, quantity);
                }}
              >
                Comprar ahora
              </Button>
            </Link>
            <AddToCartButton product={product} count={quantity} />
          </Box>

          <Stack py="2rem">
            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Delivery</Text>
              <ChakraLink textDecor="underline" color="gray.500">
                El costo del envio variara dependiendo de la zona de entrega
              </ChakraLink>
            </Box>

            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Medios de Pago</Text>
              <ChakraLink textDecor="underline" color="gray.500">
                Aceptamos pagos en efectivo, tarjeta y transferencia
              </ChakraLink>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};
