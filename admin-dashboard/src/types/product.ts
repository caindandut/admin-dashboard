export type Product = {
    id: string;
    name: string;
    category: string;
    price: number;
    status: "active" | "draft" | "archived";
    createdAt: string;
  };