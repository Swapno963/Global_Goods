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
    <>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Profile</p>
      </div>
      <h2 className="text-2xl pl-12 ml-12 font-medium text-gray-800 uppercase mb-6">
        Your Cart :
      </h2>

      <CartArea allproduct={allproduct} />
    </>
  );
}
