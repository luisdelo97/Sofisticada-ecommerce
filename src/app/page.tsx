import { Banner } from "@src/features/home/Banner";
import { TopCategories } from "@src/features/home/TopCategories";
import { ICategory } from "@src/model";

const provitionalCategories: ICategory[] = [
  {
    id: "1",
    name: "Blusas",
    slug: "blusas",
    image: "/product1.jpg",
  },
  {
    id: "2",
    name: "Vestidos",
    slug: "vestidos",
    image: "/product2.jpg",
  },
  {
    id: "3",
    name: "Gorras",
    slug: "gorras",
    image: "/product3.jpg",
  },
  {
    id: "4",
    name: "Bufandas",
    slug: "bufandas",
    image: "/product4.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <Banner />
      <TopCategories categories={provitionalCategories} />
    </main>
  );
}
