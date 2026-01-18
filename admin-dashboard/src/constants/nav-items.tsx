import { LayoutDashboard, ShoppingCart, Users, Settings, Package } from "lucide-react";

export const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: "Products",
    href: "/products",
    icon: <Package className="h-4 w-4" />,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: <ShoppingCart className="h-4 w-4" />,
  },
  {
    title: "Customers",
    href: "/users",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];