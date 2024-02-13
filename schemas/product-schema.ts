import { defineField } from "sanity";

export const ProductSchema = {
  name: "product",
  title: "Producto",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      description: "Name of Product",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Descripcion",
      type: "text",
    }),
    defineField({
      name: "category",
      title: "Categoria del producto",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "mainImage",
      title: "Imagen principal",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "gallery",
      title: "Galeria de imagenes",
      type: "array",
      of: [{ type: "galleryImage" }],
      validation: (Rule) => Rule.max(3).error("solo se permiten 3 imagenes!"),
    }),
  ],
};
