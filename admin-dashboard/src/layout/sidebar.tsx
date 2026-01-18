import { navItems } from "@/constants/nav-items";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden h-screen w-64 flex-col border-r bg-background md:flex fixed left-0 top-0">
      {/* Logo Area */}
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="">Nexus Admin</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="grid gap-1 px-2 text-sm font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                  location.pathname === item.href
                    ? "bg-muted text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.icon}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}