import {
  Box,
  Button,
  Container,
  IconButton,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiMailSend } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AppLogo } from "../AppLogo";

const SocialButton = ({
  children,
  label,
  href,
  hovColor,
}: {
  children: ReactNode;
  label: string;
  href: string;
  hovColor: string;
}) => {
  return (
    <Button
      bg="blackAlpha.100"
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      padding={0}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
        color: hovColor,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box bg="hsl(28, 89%, 89%)" color="gray.800" mt="2rem">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <AppLogo />
            </Box>
            <Text fontSize="sm">
              ©{new Date().getFullYear()} Made by Luis Delorenzi. All rights
              reserved
            </Text>
            <Stack direction="row" spacing={6}>
              <SocialButton label="Twitter" href={"#"} hovColor="skyblue">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="Facebook" href={"#"} hovColor="blue">
                <FaFacebook />
              </SocialButton>
              <SocialButton label="Instagram" href={"#"} hovColor="#e7208e">
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Get the best deals</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder="Your email address"
                bg="blackAlpha.100"
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg="brand.primary"
                color="white"
                _hover={{
                  bg: "brand.primaryDark",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
