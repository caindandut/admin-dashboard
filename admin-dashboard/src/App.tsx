import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layout/dashboard-layout";
import DashboardPage from "./pages/dashboard";
import ProductsPage from "./pages/products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="orders" element={<h1 className="text-2xl font-bold">Orders Page</h1>} />
      </Route>
    </Routes>
  );
}

export default App;