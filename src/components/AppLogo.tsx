import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const AppLogo = () => {
  return (
    <Link href="/">
      <Text
        color="brand.primary"
        fontWeight="bold"
        fontFamily="Times New Roman"
      >
        SOFI
        <Text as="span" color="brand.primaryDark">
          STICADA
        </Text>
      </Text>
    </Link>
  );
};
