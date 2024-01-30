"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AppContext } from "@src/context/AppContext";
import { calculateItemsTotal, formatPrice, getSubstring } from "@src/helpers";
import React, { useContext, useEffect, useState } from "react";

export const Checkout = () => {
  const [subTotal, setSubTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);

  const {
    state: { checkout },
  } = useContext(AppContext);

  useEffect(() => {
    const subTotal = calculateItemsTotal(checkout);
    const tax = 0.1 * subTotal;
    setSubTotal(subTotal);
    setTax(tax);
  }, [checkout]);

  return (
    <Flex
      w={{ base: "100%", lg: "90%" }}
      mx="auto"
      flexDir={{ base: "column", lg: "row" }}
      gap="2rem"
    >
      <Stack spacing={10} w={{ base: "100%", lg: "60%" }}>
        <Card borderWidth="1px" borderColor="gray.200" shadow="none">
          <CardHeader>
            <Heading size="md">Resumen de compra</Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing="2rem">
              {checkout.map((item) => (
                <Flex key={item.id} align="center" justify="space-between">
                  <Flex align="center">
                    <Image
                      src={item.mainImage}
                      boxSize="100px"
                      bgSize="contain"
                      alt={item.slug}
                    />
                    <Box mx="1rem">
                      <Text
                        fontWeight="bold"
                        fontSize={{ base: "sm", lg: "lg" }}
                        maxW="500px"
                      >
                        {item.name}
                      </Text>
                      <Text color="gray.500">
                        {getSubstring(item.description, 70)}
                      </Text>
                    </Box>
                  </Flex>
                  <Box textAlign="right">
                    <Text fontWeight="bold" fontSize={{ base: "md", lg: "lg" }}>
                      ${formatPrice(item.price)}
                    </Text>
                    <Text fontSize={{ base: "sm", lg: "md" }}>
                      Cantidad: {item.count}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Stack>
          </CardBody>
        </Card>

        <Card borderWidth="1px" borderColor="gray.200" shadow="none">
          <CardHeader>
            <Heading size="md">Ingrese sus datos</Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing="2rem">
              <Box>
                <FormLabel>Nombre Completo</FormLabel>
                <Input type="text" placeholder="nombre..." />
              </Box>

              <Box>
                <FormLabel>Direccion</FormLabel>
                <Input type="text" placeholder="direccion..." />
              </Box>

              <Box>
                <FormLabel>Telefono</FormLabel>
                <Input type="text" placeholder="telefono.." />
              </Box>

              <Box>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="correo electronico..." />
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Stack>

      <Box w={{ base: "100%", lg: "40%" }}>
        <Card borderWidth="1px" borderColor="gray.200" shadow="none" p="2rem">
          <CardHeader>
            <Heading size="md">Detalles de Pago</Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing="2rem">
              <Heading size="xs" my="1rem">
                Opciones de envio
              </Heading>
              <RadioGroup>
                <Stack>
                  <Radio value="cashOnDelivery">Delivery</Radio>
                  <Radio value="momo">Pasar a buscar</Radio>
                </Stack>
              </RadioGroup>
              <Divider mt="1rem" />

              <Box>
                <Heading size="xs" my="1rem">
                  Opciones de Pago
                </Heading>
                <RadioGroup>
                  <Stack>
                    <Radio value="cashOnDelivery">Transferencia</Radio>
                    <Radio value="momo">Efectivo</Radio>
                    <Radio value="3">Targeta con Pos (Master/Visa)</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </Stack>
            <Divider mt="1rem" />

            <Box>
              <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">Sub Total</Text>
                <Text fontWeight="bold">${formatPrice(subTotal)}</Text>
              </Flex>

              <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">Tax(10%)</Text>
                <Text fontWeight="bold">${formatPrice(tax)}</Text>
              </Flex>

              <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">Coupon Discount</Text>
                <Text fontWeight="bold">-${formatPrice(tax)}</Text>
              </Flex>

              <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">Costo Delivery</Text>
                <Text fontWeight="bold">-${formatPrice(0)}</Text>
              </Flex>
              <Divider />
              <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">Total</Text>
                <Text fontWeight="bold">${formatPrice(subTotal)}</Text>
              </Flex>
            </Box>

            <Button
              bgColor="brand.primary"
              color="white"
              w="100%"
              rounded="full"
              _hover={{
                bgColor: "brand.primaryDark",
              }}
              _active={{
                bgColor: "brand.primaryDark",
              }}
            >
              Solicitar compra! ${formatPrice(subTotal)}
            </Button>
          </CardBody>
        </Card>
      </Box>
    </Flex>
  );
};
