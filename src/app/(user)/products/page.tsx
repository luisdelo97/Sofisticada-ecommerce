import { Hero } from "@src/components/Hero/Hero";
import AllProducts from "@src/features/products/AllProducts";
import { IProduct } from "@src/model";
import { client } from "@utils/sanity.client";
import { groq } from "next-sanity";

const getAllProductsQueries: string = `
    *[_type == "product"] {
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            category->{"id": _id,name,"slug": slug.current,"image": image.asset->url},
            "mainImage": mainImage.asset->url,
        }
`;

const getProductsAsync = () => {
  return client.fetch(groq`${getAllProductsQueries}`);
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function ProductsPage() {
  const products: IProduct[] = await getProductsAsync();

  return (
    <>
      <Hero
        heading="La mas alta calidad Paraguaya"
        description="Confort, Estilo, Rapida Entrega y mas!"
        imageUrl="/bags.jpg"
        btnLabel="Ver todos los productos"
        btnLink="#productos"
      />
      <AllProducts products={products} id="productos" />
    </>
  );
}
