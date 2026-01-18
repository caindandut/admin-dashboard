import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "PROD-001",
    name: "Mechanical Keyboard Keychron K2",
    category: "Electronics",
    price: 89.99,
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: "PROD-002",
    name: "Logitech MX Master 3S",
    category: "Electronics",
    price: 99.00,
    status: "active",
    createdAt: "2024-02-20",
  },
  {
    id: "PROD-003",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 250.50,
    status: "draft",
    createdAt: "2024-03-10",
  },
  {
    id: "PROD-004",
    name: "Dell UltraSharp Monitor 27",
    category: "Electronics",
    price: 450.00,
    status: "active",
    createdAt: "2024-03-12",
  },
  {
    id: "PROD-005",
    name: "Standing Desk Frame",
    category: "Furniture",
    price: 300.00,
    status: "archived",
    createdAt: "2023-12-05",
  },
];