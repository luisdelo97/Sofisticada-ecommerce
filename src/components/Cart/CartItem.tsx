import {
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { AppContext } from "@src/context/AppContext";
import { formatPrice } from "@src/helpers";
import { IItem } from "@src/model";
import Link from "next/link";
import { useContext } from "react";
import { BsTrash } from "react-icons/bs";

type CartItemProps = {
  item: IItem;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { increaseCount, decreaseCount, removeItem } = useContext(AppContext);

  return (
    <Grid
      alignItems="center"
      templateColumns={{ base: "repeat(6, 1fr)", lg: "repeat(8, 1fr)" }}
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      my="2"
    >
      <GridItem>
        <Link href={`/products/${item.slug}`}>
          <Image
            src={item.mainImage}
            alt={item.slug}
            boxSize="40px"
            rounded="full"
            borderWidth="1px"
            borderColor="gray.300"
          />
        </Link>
      </GridItem>
      <GridItem colSpan={{ base: 5, lg: 3 }}>
        <Link href={`/products/${item.slug}`}>
          <Text>{item.name}</Text>
        </Link>
      </GridItem>
      <GridItem colSpan={{ base: 3, lg: 2 }} justifyContent="flex-end">
        <HStack my="0.5rem" justifyContent="flex-end">
          <Button onClick={() => decreaseCount("cart", item.id)}>-</Button>
          <Input
            type="number"
            value={item.count}
            readOnly={true}
            minW="52px"
            maxW="55px"
            min="1"
            max="20"
          />
          <Button onClick={() => increaseCount("cart", item.id)}>+</Button>
        </HStack>
      </GridItem>
      <GridItem textAlign="right" colSpan={{ base: 2, lg: 1 }}>
        <Text fontWeight="bold">
          &#8370;{formatPrice(item.price * item.count)}
        </Text>
      </GridItem>
      <GridItem textAlign="right">
        <Button
          variant="ghost"
          colorScheme="red"
          onClick={() => removeItem("cart", item.id)}
        >
          <BsTrash />
        </Button>
      </GridItem>
    </Grid>
  );
};
