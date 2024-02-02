export const ProductSchema = {
  name: "product",
  title: "Producto",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
      description: "Name of Product",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "price",
      title: "Precio",
      type: "number",
    },
    {
      name: "description",
      title: "Descripcion",
      type: "text",
    },
    {
      name: "category",
      title: "Categoria del producto",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "mainImage",
      title: "Imagen principal",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "gallery",
      title: "Galeria de imagenes",
      type: "array",
      of: [{ type: "galleryImage" }],
      options: {
        maxLength: 3,
      },
    },
  ],
};
