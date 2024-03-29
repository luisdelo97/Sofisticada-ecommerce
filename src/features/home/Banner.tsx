"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BannerSlider } from "./BannerSlider";

// bg = 'center / cover no-repeat url(/banner-img1.jpg)';

export const Banner = () => {
  return (
    <Box minH="600px">
      <Flex
        justify="center"
        align="center"
        gap="2"
        flexDir={{ base: "column", lg: "row" }}
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        p="2rem"
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <Heading
            size={{ base: "2xl", lg: "3xl" }}
            lineHeight="4rem"
            color="brand.primary"
            mb="0.5rem"
          >
            Online Shopping
          </Heading>
          <Heading
            as="h3"
            size={{ base: "lg", lg: "2xl" }}
            color="brand.primaryDark"
          >
            El arte de vestir lo nuestro
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} py="1rem" maxW="600px">
            Con honor destacamos y agradecemos a nuestras bordadoras de Yataity,
            Pirayú y Alto Paraná, que con sus tejidos 100% a mano brindan
            historias a cada prenda.
          </Text>
          <Link href="/products">
            <Button
              borderRadius="50px"
              minW="10rem"
              bgColor="brand.primary"
              color="white"
              _hover={{ bgColor: "brand.primaryDark" }}
            >
              Comprar Ahora
            </Button>
          </Link>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }}>
          <Box
            my="2rem"
            w={{ base: "300px", lg: "600px" }}
            h={{ base: "300px", lg: "500px" }}
            borderRadius="1rem"
            bg="center 10% / cover no-repeat url(sofi-home.png)"
          />
          {/* <BannerSlider /> */}
        </Box>
      </Flex>
    </Box>
  );
};
