import { auth } from "@/auth";
import ProductDescription from "@/components/product/ProductDescription";
import ProductDetail from "@/components/product/ProductDetail";
import RelatedProducts from "@/components/product/RelatedProducts";
import { getProductById } from "@/database/queries";

export default async function page({ params: { id } }) {
  const product = await getProductById(id);
  const session = await auth();
  return (
    <div className="">
      <div className="container py-4 flex items-center gap-3">
        <p className="text-gray-600 font-medium">Product</p>
      </div>

      <ProductDetail product={product} session={session} />
      <ProductDescription product={product} />
      <RelatedProducts category_name={product?.category_name} />
    </div>
  );
}
