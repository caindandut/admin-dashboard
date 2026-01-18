import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { navItems } from "@/constants/nav-items";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
            Nexus Admin
          </Link>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => setOpen(false)} // Đóng menu khi click
              className={cn(
                "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground",
                location.pathname === item.href
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}