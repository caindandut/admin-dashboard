import { columns } from "@/components/products/columns";
import { DataTable } from "@/components/products/data-table";
import { products } from "@/constants/products-data";

export default function ProductsPage() {
  return (
    <div className="space-y-4">
       <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
      </div>
      <DataTable columns={columns} data={products} />
    </div>
  );
}