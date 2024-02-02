export const FeaturedProductsAndCategories = {
  name: "featuredProductsAndCategories",
  title: "Destacados",
  type: "document",
  fields: [
    {
      name: "topCategories",
      title: "Top Categorias",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      name: "newProducts",
      title: "Lo mas nuevo",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
    {
      name: "popular",
      title: "Lo mas popular",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
  ],
};
