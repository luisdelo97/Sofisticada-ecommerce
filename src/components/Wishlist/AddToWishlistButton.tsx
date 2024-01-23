import { Button } from "@chakra-ui/react";
import { AppContext } from "@src/context/AppContext";
import { IProduct } from "@src/model";
import React, { useContext } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

type IAddToWishlistButtonProps = {
  product: IProduct;
};

export const AddToWishlistButton = ({ product }: IAddToWishlistButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);
  return (
    <>
      <Button
        pos="absolute"
        variant="ghost"
        color="red.400"
        _hover={{ bgColor: "transparent" }}
        rounded="full"
        title="Add to Wishlist"
        onClick={
          isAdded("wishlist", product?.id)
            ? () => removeItem("wishlist", product?.id)
            : () => addItem("wishlist", product)
        }
      >
        {isAdded("wishlist", product?.id) ? <BsHeartFill /> : <BsHeart />}
      </Button>
    </>
  );
};
