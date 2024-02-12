import { Box } from "@chakra-ui/react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { groq } from "next-sanity";
import { ICategory } from "@src/model";
import { client } from "@utils/sanity.client";

const getAllTheCategories: string = groq`
    *[_type == "category" ] {
      "id": _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
    }
`;

export const Navbar = async () => {
  const categories: ICategory[] = await client.fetch(getAllTheCategories);

  return (
    <>
      <Box className="navbar-wrapper" h="80px" mb="1.5rem">
        <Box pos="fixed" w="100%" bgColor="brand.primary" mb="1rem" zIndex={10}>
          <DesktopNav categories={categories} />
          <MobileNav categories={categories} />
        </Box>
      </Box>
    </>
  );
};
