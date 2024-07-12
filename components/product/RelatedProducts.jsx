import { getProductByCategory } from "@/database/queries";
import SingleProduct from "../SingleProduct";

export default async function RelatedProducts({ category_name }) {
  const relatedproduct = await getProductByCategory(category_name);

  return (
    <>
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          Related products
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {/* single product */}
          {relatedproduct?.map((pd) => (
            <SingleProduct product={pd} key={pd?.id} />
          ))}
        </div>
      </div>
    </>
  );
}
