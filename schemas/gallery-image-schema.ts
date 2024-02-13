import { defineField } from "sanity";

export const GalleryImageSchema = {
  name: "galleryImage",
  title: "Galeria de imagenes",
  type: "image",
  fields: [
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
  options: {
    hotspot: true,
  },
};
