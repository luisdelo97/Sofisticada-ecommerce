import { Banner } from "@src/features/home/Banner";
import { FeaturedProducts } from "@src/features/home/FeaturedProducts";
import { TopCategories } from "@src/features/home/TopCategories";
import { IFeaturedItems } from "@src/model";
import { groq } from "next-sanity";
import { client } from "@utils/sanity.client";

const getAllFeaturedItemsQueries = `
    *[_type == "featuredProductsAndCategories"]{
        "topCategories": topCategories[]->{
            "id": _id,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        },
        "newProducts": newProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            category->{"id": _id,name,"slug": slug.current,"image": image.asset->url},
            "mainImage": mainImage.asset->url,
        },
        "popular":popular[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            category->{"id": _id,name,"slug": slug.current,"image": image.asset->url},
            "mainImage": mainImage.asset->url,
        }
    }
`;

const getFeaturedItemsAsync = () => {
  return client.fetch(groq`${getAllFeaturedItemsQueries}`);
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Home() {
  const featuredItems: IFeaturedItems[] = await getFeaturedItemsAsync();

  return (
    <main>
      <Banner />
      <TopCategories categories={featuredItems[0].topCategories} />
      <FeaturedProducts title="Popular" products={featuredItems[0].popular} />
      <FeaturedProducts
        title="Lo nuevo"
        products={featuredItems[0].newProducts}
      />
    </main>
  );
}
