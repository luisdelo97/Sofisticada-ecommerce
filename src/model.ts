export type NavItem = {
  label: string;
  href: string;
};

export type IBreadcrumbItem = {
  name: string;
  link: string;
};
export type IProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  mainImage: string;
  category: ICategory;
  gallery?: { url: string; caption: string }[];
};

export type ICategory = {
  id: string;
  name: string;
  image: string;
  slug: string;
};

export type IFeaturedItems = {
  topCategories: ICategory[];
  newProducts: IProduct[];
  popular: IProduct[];
};

export type IItem = IProduct & {
  count: number;
};

export type IState = {
  cart: IItem[];
  wishlist: IItem[];
  checkout: IItem[];
};
export type ItemKey = "cart" | "wishlist" | "checkout";
export type IContext = {
  state: IState;
  addItem: (key: ItemKey, product: IProduct, count?: number) => void;
  removeItem: (key: ItemKey, productId: string) => void;
  increaseCount: (key: ItemKey, productId: string) => void;
  decreaseCount: (key: ItemKey, productId: string) => void;
  isAdded: (key: ItemKey, productId: string) => boolean;
  resetItems: (key: ItemKey) => void;
};
