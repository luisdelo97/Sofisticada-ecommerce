import { defineField } from "sanity";

export const FeaturedProductsAndCategories = {
  name: "featuredProductsAndCategories",
  title: "Destacados",
  type: "document",
  fields: [
    defineField({
      name: "topCategories",
      title: "Top Categorias",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    }),
    defineField({
      name: "newProducts",
      title: "Lo mas nuevo",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    }),
    defineField({
      name: "popular",
      title: "Lo mas popular",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    }),
  ],
};
