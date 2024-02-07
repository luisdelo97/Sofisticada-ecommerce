"use client";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { navItems } from "@src/helpers";
import Link from "next/link";
import React, { useRef } from "react";
import { VscListFlat } from "react-icons/vsc";
import { AppLogo } from "../AppLogo";
import { FaChevronDown } from "react-icons/fa6";
import { ICategory } from "@src/model";

export const NavMenu = ({ categories }: { categories: ICategory[] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} background="transparent">
        <VscListFlat />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <AppLogo />
          </DrawerHeader>
          <Divider />

          <DrawerBody>
            <Box _hover={{ color: "brand.primary" }} fontWeight="semibold">
              <Link href="/products">Productos</Link>
            </Box>

            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<FaChevronDown />}
                bgColor="transparent"
                fontWeight="semibold"
                _active={{ bgColor: "transparent" }}
                _hover={{ bgColor: "transparent", color: "brand.primary" }}
                px={0}
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
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src={categ.image}
                      alt={categ.slug}
                      mr="12px"
                    />
                    <Text as="span">{categ.name}</Text>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
