import { ICategory, IProduct } from "@src/model";

//todo: remove this once we connect, from here
export const provitionalCategories: ICategory[] = [
  {
    id: "1a",
    name: "Crochet",
    slug: "crochet",
    image: "/store.png",
  },
  {
    id: "2a",
    name: "Bolsas",
    slug: "bolsas",
    image: "/bolsa.png",
  },
  {
    id: "3a",
    name: "Gorras",
    slug: "gorras",
    image: "/gorra.png",
  },
  {
    id: "4a",
    name: "Bufandas",
    slug: "bufandas",
    image: "/vestido.png",
  },
];
export const provitionalProducts: IProduct[] = [
  {
    id: "1",
    name: "Crochet Pasion Guarani",
    description:
      "El vibrante tono rojo del crochet evoca la pasión y el espíritu vibrante de Paraguay, mientras que los detalles en contraste de color crema en las mangasofrecen un encanto delicado y una sensación vintage. Cada puntada es testimonio de la atención al detalle y la habilidad artística, asegurando no solo un ajuste cómodo sino también un estilo único. Ideal para los días soleados y las escapadas playeras, este conjunto es una pieza distintiva que celebra la belleza de las tradiciones artesanales paraguayas.",
    category: provitionalCategories[0],
    mainImage: "/crochet.png",
    price: 60,
    slug: "blusa-blanca",
    gallery: ["/crochet.png", "/bolsa.png", "/gorra.png", "/vestido.png"],
  },
  {
    id: "2",
    name: "Clutch Kuarahy",
    description:
      "Este bolso de mano es una obra de arte textil. Cada hilo ha sido tejido con una técnica intrincada que crea una textura rica y una estética visualmente cautivadora. La paleta de colores naturales ofrece una versatilidad excepcional, perfecta para complementar cualquier atuendo con un toque de sofisticación orgánica. El acabado se realza aún más por la etiqueta distintiva que proclama la marca y la calidad, 'Sofisticada', prometiendo no solo un accesorio de moda sino también una pieza de la rica tradición cultural paraguaya. Este bolso no es solo un complemento, sino una declaración de moda ética y sostenible.",
    category: {
      id: "2",
      name: "Bolsas",
      slug: "bolsas",
      image: "/bolsa.png",
    },
    mainImage: "/bolsa.png",
    price: 40,
    slug: "bolsa-amarilla",
    gallery: ["/crochet.png", "/bolsa.png", "/gorra.png", "/vestido.png"],
  },
  {
    id: "3",
    name: "Gorra Chara",
    description:
      "Este elegante y sofisticado gorro, fabricado con fibras de alta calidad, presenta un diseño clásico con una banda ancha y un ala flexible que no solo protege del sol sino que también añade un toque de elegancia a cualquier atuendo. El color azul profundo es versátil y atemporal, asegurando que este accesorio sea un complemento perfecto tanto para looks casuales como más formales. Cada puntada es un testimonio de la destreza y la tradición tejida en la cultura paraguaya, haciendo de este gorro una pieza única que no solo es un accesorio de moda sino también una expresión de herencia cultural.",
    category: {
      id: "3",
      name: "Gorras",
      slug: "gorras",
      image: "/gorra.png",
    },
    mainImage: "/gorra.png",
    price: 40,
    slug: "gorra-azul",
    gallery: ["/crochet.png", "/bolsa.png", "/gorra.png", "/vestido.png"],
  },
  {
    id: "4",
    name: "Vestido Ao po'i",
    description:
      "Este vestido encarna la elegancia sutil con su diseño etéreo y líneas limpias, destacando la destreza de las artesanas paraguayas. Confeccionado con una tela ligera y aireada, ofrece una caída fluida y una silueta favorecedora que se desliza con gracia sobre el cuerpo. El detalle distintivo del vestido es su intrincado trabajo de encaje en el dobladillo, una técnica tradicional paraguaya que añade un toque de sofisticación artesanal. Las delicadas rayas verticales en tonos tierra y las sutiles notas de color enriquecen el diseño con una paleta de colores armoniosa y terrosa, inspirada en la naturaleza y la riqueza cultural de Paraguay. Este vestido no solo es una prenda versátil perfecta para ocasiones especiales, sino también una pieza de arte que celebra la belleza y el talento del trabajo manual.",
    category: {
      id: "4",
      name: "Vestido",
      image: "/vestido.png",
      slug: "vestido",
    },
    mainImage: "/vestido.png",
    price: 40,
    slug: "vestido-blanca",
    gallery: ["/crochet.png", "/bolsa.png", "/gorra.png", "/vestido.png"],
  },
  {
    id: "5",
    name: "Bufanda",
    description: "una bufanda",
    category: {
      id: "5",
      name: "Bufanda",
      image: "/vestido.png",
      slug: "bufandas",
    },
    mainImage: "/vestido.png",
    price: 40,
    slug: "bufanda-blanca",
    gallery: ["/crochet.png", "/bolsa.png", "/gorra.png", "/vestido.png"],
  },
];
//todo: to here
