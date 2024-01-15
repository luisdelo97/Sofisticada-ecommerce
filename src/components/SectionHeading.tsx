import { Heading } from "@chakra-ui/react";
import React from "react";

interface SectionHeadingProps {
  title: string;
}
export const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <Heading
      size={{ base: "md", lg: "lg" }}
      my="1.5rem"
      color="brand.primaryDark"
    >
      {title}
    </Heading>
  );
};
