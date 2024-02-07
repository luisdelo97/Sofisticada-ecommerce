import { Box, Flex, Stack } from "@chakra-ui/react";
import { AppLogo } from "../AppLogo";
import { Cart } from "../Cart/Cart";
import { Wishlist } from "../Wishlist/Wishlist";
import { Search } from "../Search/Search";
import { NavMenu } from "./NavMenu";
import { ICategory } from "@src/model";

export function MobileNav({ categories }: { categories: ICategory[] }) {
  return (
    <>
      <Flex
        justify="space-between"
        alignItems="center"
        display={{ base: "flex", lg: "none" }}
        px="0.5rem"
        pt="1rem"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <NavMenu categories={categories} />
        <AppLogo />

        <Stack direction="row" spacing={1}>
          <Wishlist />
          <Cart />
        </Stack>
      </Flex>
      <Box
        px="2rem"
        py="0.5rem"
        mb="0.25rem"
        display={{ base: "block", lg: "none" }}
      >
        <Search />
      </Box>
    </>
  );
}
