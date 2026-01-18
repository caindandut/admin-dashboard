import { LayoutDashboard, ShoppingCart, Users, Settings, Package } from "lucide-react";

export const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: "Sản phẩm",
    href: "/products",
    icon: <Package className="h-4 w-4" />,
  },
  {
    title: "Đơn hàng",
    href: "/orders",
    icon: <ShoppingCart className="h-4 w-4" />,
  },
  {
    title: "Khách hàng",
    href: "/users",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Cài đặt",
    href: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];