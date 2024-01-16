"use client";
import { Button } from "@chakra-ui/react";
import { IProductWithoutRating } from "@src/app/datoBorrar"; //todo: remove IProductWithoutRating
// import { AppContext } from "@src/context/AppContext";
import type { IProduct } from "@src/model";
import React, { useContext, useState } from "react";

type IAddToCartButtonProps = {
  product: IProductWithoutRating; //todo: remove IProductWithoutRating
  count?: number;
};
export const AddToCartButton = ({ product, count }: IAddToCartButtonProps) => {
  // const { addItem, removeItem, isAdded } = useContext(AppContext);
  const [isAdded, setIsAdded] = useState(false); //todo: remove useState
  return (
    <>
      {/* {isAdded("cart", product?.id) ? (
        <Button
          variant="outline"
          borderColor="gray.200"
          color="gray.500"
          borderRadius="50px"
          size="sm"
          w="150px"
          onClick={() => removeItem("cart", product?.id)}
        >
          Remove from cart
        </Button>
      ) : (
        <Button
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          borderRadius="50px"
          size="sm"
          w="150px"
          onClick={() => addItem("cart", product, count)}
        >
          Add to cart
        </Button>
      )} */}
      {/* //todo: remove the button*/}
      <Button
        variant="outline"
        shadow="md"
        color={isAdded ? "gray.500" : "brand.primary"}
        borderRadius="0.25rem"
        bgColor="white"
        size="sm"
        w="120px"
        onClick={() => setIsAdded(!isAdded)}
      >
        {isAdded ? "Added" : "Add to cart"}
      </Button>
    </>
  );
};
