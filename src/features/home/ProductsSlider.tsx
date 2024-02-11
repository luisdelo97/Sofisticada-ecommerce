"use client";
import { SwiperOptions } from "swiper/types";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { ProductCard } from "../../components/Card/ProductCard";
import { SwiperNavButtons } from "./SwiperNavButtons";
import { IProduct } from "@src/model";

const slideStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "380px",
};

type ProductsSlider = {
  products: IProduct[];
};
export const ProductsSlider = ({ products }: ProductsSlider) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      550: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <Box w="100%" h="100%">
      <Swiper {...sliderSettings} style={{ width: "100%", height: "100%" }}>
        {products?.map((product) => (
          <SwiperSlide key={product?.id} style={slideStyles}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </Box>
  );
};
