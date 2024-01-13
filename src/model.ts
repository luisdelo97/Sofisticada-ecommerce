export type ItemKey = "cart" | "wishlist" | "checkout";

export type NavItem = {
  label: string;
  href: string;
};

export type IRating = {
  rate: number;
  count: number;
};

export type IProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: IRating;
  slug: string;
  mainImage: string;
  category: ICategory;
  gallery: string[];
};

export type ICategory = {
  id: string;
  name: string;
  image: string;
  slug: string;
};

export type IFeaturedItems = {
  topCategories: ICategory[];
  bestDeals: IProduct[];
  mostSellingProducts: IProduct[];
  trendingProducts: IProduct[];
};

export type IState = {
  cart: IItem[];
  wishlist: IItem[];
  checkout: IItem[];
};

export type IItem = IProduct & {
  count: number;
};

export type IBreadcrumbItem = {
  name: string;
  link: string;
};

export type IContext = {
  state: IState;
  addItem: (key: ItemKey, product: IProduct, count?: number) => void;
  removeItem: (key: ItemKey, productId: string) => void;
  increaseCount: (key: ItemKey, productId: string) => void;
  decreaseCount: (key: ItemKey, productId: string) => void;
  isAdded: (key: ItemKey, productId: string) => boolean;
  resetItems: (key: ItemKey) => void;
};
