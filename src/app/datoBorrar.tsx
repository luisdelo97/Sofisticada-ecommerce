import { ICategory, IProduct } from "@src/model";

//todo: remove this once we connect, from here
export const provitionalCategories: ICategory[] = [
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
export type IProductWithoutRating = Omit<IProduct, "rating">;
export const provitionalProducts: IProductWithoutRating[] = [
  {
    id: "1",
    name: "Blusa",
    description: "una blusa",
    category: {
      id: "1",
      name: "Blusa",
      image: "/product1.jpg",
      slug: "blusas",
    },
    mainImage: "/product1.jpg",
    price: 60,
    slug: "blusa-blanca",
    gallery: [
      "/product1.jpg",
      "/product2.jpg",
      "/product3.jpg",
      "/product4.jpg",
    ],
  },
  {
    id: "2",
    name: "Vestido",
    description: "un vestido",
    category: {
      id: "2",
      name: "Vestidos",
      image: "/product2.jpg",
      slug: "vestidos",
    },
    mainImage: "/product2.jpg",
    price: 40,
    slug: "vestido-blanca",
    gallery: [
      "/product1.jpg",
      "/product2.jpg",
      "/product3.jpg",
      "/product4.jpg",
    ],
  },
  {
    id: "3",
    name: "Gorra",
    description: "una gorra",
    category: {
      id: "2",
      name: "Gorras",
      image: "/product3.jpg",
      slug: "gorras",
    },
    mainImage: "/product3.jpg",
    price: 40,
    slug: "gorra-blanca",
    gallery: [
      "/product1.jpg",
      "/product2.jpg",
      "/product3.jpg",
      "/product4.jpg",
    ],
  },
  {
    id: "4",
    name: "Bufanda",
    description: "una bufanda",
    category: {
      id: "2",
      name: "Bufanda",
      image: "/product4.jpg",
      slug: "bufandas",
    },
    mainImage: "/product4.jpg",
    price: 40,
    slug: "bufanda-blanca",
    gallery: [
      "/product1.jpg",
      "/product2.jpg",
      "/product3.jpg",
      "/product4.jpg",
    ],
  },
  {
    id: "5",
    name: "Bufanda",
    description: "una bufanda",
    category: {
      id: "5",
      name: "Bufanda",
      image: "/product4.jpg",
      slug: "bufandas",
    },
    mainImage: "/product4.jpg",
    price: 40,
    slug: "bufanda-blanca",
    gallery: [
      "/product1.jpg",
      "/product2.jpg",
      "/product3.jpg",
      "/product4.jpg",
    ],
  },
];
//todo: to here
