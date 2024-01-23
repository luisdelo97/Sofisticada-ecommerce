// "use client";
import { provitionalProducts } from "@src/app/datoBorrar";
import { ProductDetails } from "@src/features/products/ProductDetails";
import { IProduct } from "@src/model";
// import { client } from '@utils/sanity.client';
import { groq } from "next-sanity";
import React from "react";

const query: string = groq`
    *[_type == "product" && slug.current == $slug][0] {
      ...,
      "id": _id,
      "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[].asset->url
    }
`;

type Props = {
  params: {
    slugProduct: string;
  };
};

function ProductDetailsPage({ params: { slugProduct } }: Props) {
  // const product: IProduct = await client.fetch(query, { slug });
  // console.log("page details");

  const product: IProduct | undefined = provitionalProducts.find(
    (p) => p.slug === slugProduct
  )!;
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}

export default ProductDetailsPage;

// export async function generateStaticParams() {
//   const query = groq`*[_type == "product"] {
//     "slug": slug.current
//   }`;

//   const products: IProduct[] = await client.fetch(query);

//   return products.map((product) => ({
//     slug: product.slug,
//   }));
// }
