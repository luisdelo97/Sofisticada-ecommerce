"use client";
import { Button } from "@chakra-ui/react";
import { AppContext } from "@src/context/AppContext";
import type { IProduct } from "@src/model";
import React, { memo, useContext, useEffect } from "react";
import { BsBagPlusFill, BsBagX } from "react-icons/bs";

type IAddToCartButtonProps = {
  product: IProduct; //todo: remove IProductWithoutRating
  count?: number;
};
export const AddToCartButton = ({ product, count }: IAddToCartButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);

  // console.log(count);

  return (
    <>
      <Button
        variant="outline"
        shadow="md"
        color={isAdded("cart", product?.id) ? "gray.500" : "brand.primary"}
        borderRadius="0.25rem"
        bgColor="white"
        size="sm"
        w="100px"
        rightIcon={
          isAdded("cart", product?.id) ? (
            <BsBagX size="0.75rem" />
          ) : (
            <BsBagPlusFill size="0.75rem" />
          )
        }
        onClick={
          isAdded("cart", product?.id)
            ? () => removeItem("cart", product?.id)
            : () => addItem("cart", product, count)
        }
      >
        {isAdded("cart", product?.id) ? "Añadido" : "Añadir"}
      </Button>
    </>
  );
};
