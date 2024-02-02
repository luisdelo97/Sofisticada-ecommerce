export const GalleryImageSchema = {
  name: "galleryImage",
  title: "Galeria de imagenes",
  type: "image",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        isHightLight: true,
      },
    },
  ],
  options: {
    hotspot: true,
  },
};
