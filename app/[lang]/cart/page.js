import { auth } from "@/auth";
import CartArea from "@/components/CartArea/CartArea";
import { getProductByIds, getProductForCheckout } from "@/database/queries";

export default async function page() {
  const session = await auth();

  const products = await getProductForCheckout(session?.user?.email);
  const ids = products?.map((pd) => pd?.pId);
  // console.log(ids);
  const allproduct = await getProductByIds(ids);
  // console.log(allproduct?.length);
  return (
    <div className="">
      <h2 className="mx-auto mt-12 space-y-4 max-w-6xl   text-2xl   font-medium text-gray-800 uppercase mb-6">
        Your Cart :
      </h2>

      <CartArea allproduct={allproduct} />
    </div>
  );
}
