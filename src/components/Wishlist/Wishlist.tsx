"use client";
import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { AppContext } from "@src/context/AppContext";
import { useContext } from "react";
import { BsHeart } from "react-icons/bs";
import { WishlistItem } from "./WishlistItem";

export const Wishlist = () => {
  const {
    state: { wishlist },
    resetItems,
  } = useContext(AppContext);

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          color="brand.primaryDark"
          variant="ghost"
          _hover={{
            bgColor: "transparent",
            color: "brand.primary",
          }}
          pos="relative"
          px={{ base: "0.25rem" }}
        >
          <BsHeart size="0.8rem" />

          <Text mx="1" display={{ base: "none", md: "block" }}>
            Deseos
          </Text>
          {wishlist.length !== 0 && (
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
              {wishlist.length}
            </Flex>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader color="brand.primary" fontWeight="bold">
          Wishlist
        </PopoverHeader>
        <PopoverBody p="1rem">
          {wishlist.length === 0 ? (
            <>Your Wishlist is Empty</>
          ) : (
            wishlist.map((item) => <WishlistItem key={item.id} item={item} />)
          )}
        </PopoverBody>
        <PopoverFooter>
          {wishlist.length !== 0 && (
            <Button
              variant="outline"
              mr={3}
              onClick={() => resetItems("wishlist")}
            >
              Clear Wishlist
            </Button>
          )}
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
