"use client";
import { Box, Flex, Image } from "@chakra-ui/react";
import { IProduct } from "@src/model";
import { useState } from "react";

type ImageGalleryProps = {
  product: IProduct;
};

type GalleryItem = {
  url: string;
  caption: string;
};

const ImageGallery = ({ product }: ImageGalleryProps) => {
  const [bigImage, setBigImage] = useState<GalleryItem>({
    url: product.mainImage,
    caption: product.name,
  });

  const galleryProduct: GalleryItem[] = [
    {
      url: product.mainImage,
      caption: product.name,
    },
    ...(product?.gallery?.map((g) => ({
      url: g.url,
      caption: g.caption,
    })) ?? []),
  ];

  const handlerSmallImageClick = (elem: GalleryItem) => {
    const index = galleryProduct.findIndex((gal) => gal === elem);
    setBigImage(galleryProduct[index]);
  };

  return (
    <>
      <Box
        mx="auto"
        mt="2rem"
        overflow="hidden"
        cursor="pointer"
        aspectRatio="16/9"
      >
        <Image
          src={bigImage.url}
          alt={bigImage.caption}
          objectFit="contain"
          boxSize="100%"
          transition="0.3s"
          _hover={{ transform: "scale(1.1)" }}
        />
      </Box>
      <Flex mt="1rem" justifyContent="center" flexWrap="wrap" gap="1rem">
        {galleryProduct?.length !== 0 &&
          galleryProduct.map((elem, i) => (
            <Image
              key={i}
              src={elem.url}
              alt={elem.caption}
              boxSize={{ base: "80px", lg: "100px" }}
              rounded="md"
              objectFit="contain"
              shadow="lg"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="gray.200"
              _hover={{ borderColor: "brand.primaryLight" }}
              onClick={() => handlerSmallImageClick(elem)}
            />
          ))}
      </Flex>
    </>
  );
};

export default ImageGallery;
