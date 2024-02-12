import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { AppLogo } from "../AppLogo";
import { Cart } from "../Cart/Cart";
import { Wishlist } from "../Wishlist/Wishlist";
import { Search } from "../Search/Search";
import { FaChevronDown } from "react-icons/fa6";
import { ICategory } from "@src/model";

export function DesktopNav({ categories }: { categories: ICategory[] }) {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      display={{ base: "none", lg: "flex" }}
      px="4rem"
      py="1rem"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Stack direction="row" gap={6} flex={1} alignItems="center">
        <Box mr="1rem">
          <AppLogo />
        </Box>
        <Box
          _hover={{ color: "black" }}
          color="brand.white"
          fontWeight="semibold"
        >
          <Link href="/products">Productos</Link>
        </Box>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown />}
            bgColor="transparent"
            fontWeight="semibold"
            color="brand.white"
            _active={{ bgColor: "transparent" }}
            _hover={{ bgColor: "transparent", color: "black" }}
          >
            Categorias
          </MenuButton>
          <MenuList>
            {categories.map((categ) => (
              <MenuItem
                minH="48px"
                key={categ.id}
                as={Link}
                href={`/products/${categ.slug}`}
              >
                <Text as="span">{categ.name}</Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Search />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Wishlist />
        <Cart />
      </Stack>
    </Flex>
  );
}
