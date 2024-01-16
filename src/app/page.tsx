import { Box } from "@chakra-ui/react";
import { Banner } from "@src/features/home/Banner";
import { FeaturedProducts } from "@src/features/home/FeaturedProducts";
import { TopCategories } from "@src/features/home/TopCategories";
import { ICategory, IProduct } from "@src/model";
import { colors } from "@src/theme";
import { provitionalCategories, provitionalProducts } from "./datoBorrar";

export default function Home() {
  return (
    <main>
      <Banner />
      <TopCategories categories={provitionalCategories} />
      <FeaturedProducts title="Lo mas popular" products={provitionalProducts} />
    </main>
  );
}
