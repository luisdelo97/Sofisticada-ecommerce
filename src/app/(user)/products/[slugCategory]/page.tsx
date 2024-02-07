import { Hero } from "@src/components/Hero/Hero";
import { AllProducts } from "@src/features/products/AllProducts";
import { IBreadcrumbItem, IProduct } from "@src/model";
import { client } from "@utils/sanity.client";
import { groq } from "next-sanity";
import React from "react";

const query: string = groq`
    *[_type == "product" && category->slug.current == $slugCategory] {
      "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            category->{"id": _id,name,"slug": slug.current,"image": image.asset->url},
    }
`;

export const revalidate = 60; // revalidate this page every 60 seconds

type Props = {
  params: {
    slugCategory: string;
  };
};

const items: IBreadcrumbItem[] = [
  {
    name: "Products",
    link: "/products",
  },
];

async function CategoryPage({ params: { slugCategory } }: Props) {
  const products: IProduct[] = await client.fetch(query, { slugCategory });

  return (
    <>
      <Hero
        heading={products[0]?.category?.name}
        description={`${products[0]?.category?.name} para vos!`}
        imageUrl={products[0]?.category?.image}
        btnLabel={`Ver ${products[0]?.category?.name}`}
        btnLink="#productos"
      />
      <AllProducts
        id="productos"
        products={products}
        breadcrumbItems={[
          ...items,
          {
            name: products[0]?.category?.name,
            link: "#",
          },
        ]}
      />
    </>
  );
}

export default CategoryPage;

// export async function generateStaticParams() {
//   const query = groq`*[_type == "category"] {
//     "id": _id
//   }`;

//   const categories: ICategory[] = await client.fetch(query);

//   return categories.map((category) => ({
//     id: category.id,
//   }));
// }
