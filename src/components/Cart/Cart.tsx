"use client";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AppContext } from "@src/context/AppContext";
import { calculateItemsTotal, formatPrice } from "@src/helpers";
import Link from "next/link";
import { useContext, useRef } from "react";
import { BsCart4 } from "react-icons/bs";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const {
    state: { cart },
    resetItems,
    addItem,
  } = useContext(AppContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  const handleCheckout = () => {
    resetItems("checkout");
    cart.forEach((cartItem) => {
      addItem("checkout", cartItem, cartItem.count);
    });

    onClose();
  };

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        color="brand.white"
        _hover={{
          bgColor: "transparent",
          color: "black",
        }}
        pos="relative"
        px={{ base: "0.25rem" }}
      >
        <BsCart4 />
        <Text mx="1" display={{ base: "none", md: "block" }} fontWeight="bold">
          Carrito
        </Text>
        {cart.length !== 0 && (
          <Flex
            pos="absolute"
            top="0px"
            right="5px"
            bgColor="brand.primaryLight"
            boxSize="15px"
            rounded="full"
            color="white"
            fontSize="0.6rem"
            align="center"
            justify="center"
          >
            {cart.length}
          </Flex>
        )}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="brand.primary">
            Carrito ( {cart.length} Items )
          </DrawerHeader>
          <DrawerBody>
            {cart.length === 0 ? (
              <>Tu Carrito esta vacio</>
            ) : (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </DrawerBody>
          {cart.length !== 0 && (
            <DrawerFooter justifyContent="space-between">
              <Box>
                <Button
                  variant="outline"
                  mr={3}
                  onClick={() => resetItems("cart")}
                >
                  Limpiar
                </Button>
                <Link href="/checkout">
                  <Button
                    bgColor="brand.primary"
                    color="white"
                    _hover={{
                      bgColor: "brand.primaryLight",
                    }}
                    _active={{
                      bgColor: "brand.primaryLight",
                    }}
                    onClick={handleCheckout}
                  >
                    Pagar
                  </Button>
                </Link>
              </Box>
              <Box fontWeight="bold">
                Total: &#8370;{formatPrice(calculateItemsTotal(cart))}
              </Box>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
