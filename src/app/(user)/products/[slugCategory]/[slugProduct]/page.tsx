import { provitionalProducts } from "@src/app/(user)/datoBorrar";
import { ProductDetails } from "@src/features/products/ProductDetails";
import { IProduct } from "@src/model";
import { client } from "@utils/sanity.client";
import { groq } from "next-sanity";

const query: string = groq`
    *[_type == "product" && slug.current == $slugProduct][0] {
      "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            category->{"id": _id,name,"slug": slug.current,"image": image.asset->url},
    }
`;

type Props = {
  params: {
    slugProduct: string;
  };
};

async function ProductDetailsPage({ params: { slugProduct } }: Props) {
  const product: IProduct = await client.fetch(query, { slugProduct });

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
