import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layout/dashboard-layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<h1 className="text-2xl font-bold">Dashboard Overview</h1>} />
        <Route path="products" element={<h1 className="text-2xl font-bold">Products Page</h1>} />
        <Route path="orders" element={<h1 className="text-2xl font-bold">Orders Page</h1>} />
      </Route>
    </Routes>
  );
}

export default App;