import { extendTheme } from "@chakra-ui/react";
import { buildLegacyTheme } from "sanity";

export const colors = {
  brand: {
    primary: "hsl(17, 70%, 63.90%)",
    primaryLight: "hsl(17, 70%, 74%)",
    primaryDark: "hsl(17, 70%, 25%)",
    primaryHighlight: "hsl(13, 100%, 95.30%)",
  },
};
//
export const theme = extendTheme({ colors });

const props = {
  "--ms-white": "#fff",
  "--ms-black": "#1a1a1a",
  "--brand-primary": "#e38763",
  "--brand-primary-light": "#eba98e",
  "--brand-primary-dark": "#6c2c13",
  "--ms-gray": "#666666",
};

export const msTheme = buildLegacyTheme({
  "--black": props["--ms-black"],
  "--gray": props["--ms-gray"],

  "--focus-color": props["--brand-primary-dark"],

  "--brand-primary": props["--brand-primary"],

  "--component-bg": props["--ms-white"],
  "--component-text-color": props["--ms-black"],

  "--default-button-color": props["--ms-gray"],
  "--default-button-primary-color": props["--brand-primary"],

  "--state-info-color": props["--brand-primary-light"],
});
