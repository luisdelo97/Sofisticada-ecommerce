import { extendTheme } from "@chakra-ui/react";

export const colors = {
  brand: {
    primary: "hsl(17, 70%, 63.90%)",
    primaryLight: "hsl(17, 70%, 74%)",
    primaryDark: "hsl(17, 70%, 54%)",
  },
};

export const theme = extendTheme({ colors });
