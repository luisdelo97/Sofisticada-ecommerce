export const CategorySchema = {
  name: "category",
  title: "Categoria",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 50,
      },
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
