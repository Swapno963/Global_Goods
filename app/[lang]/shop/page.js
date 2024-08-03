import SingleProduct from "@/components/SingleProduct";
import { getAllProduct } from "@/database/queries";

export default async function AllProducts() {
  const allProducts = await getAllProduct();
  return (
    <div className="p-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:w-4/5 mx-auto">
        {allProducts?.map((pd) => (
          <SingleProduct product={pd} key={pd?.id} />
        ))}
      </div>
    </div>
  );
}
