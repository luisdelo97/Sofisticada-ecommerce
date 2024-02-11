"use client";
import { Flex, Image } from "@chakra-ui/react";
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
      <Image src={bigImage.url} alt={bigImage.caption} mx="auto" mt="2rem" />
      <Flex mt="1rem" justifyContent="center" flexWrap="wrap" gap="1rem">
        {galleryProduct?.length !== 0 &&
          galleryProduct.map((elem, i) => (
            <Image
              key={i}
              src={elem.url}
              alt={elem.caption}
              boxSize="100px"
              rounded="md"
              shadow="sm"
              borderWidth="1px"
              borderColor="gray.100"
              onClick={() => handlerSmallImageClick(elem)}
            />
          ))}
      </Flex>
    </>
  );
};

export default ImageGallery;
