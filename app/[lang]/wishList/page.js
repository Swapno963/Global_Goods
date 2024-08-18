import { auth } from "@/auth";
import WhitelistArea from "@/components/whitelistArea/WhitelistArea";
import { getProductByIds, getProductForNavbar } from "@/database/queries";

export default async function page() {
  const session = await auth();

  const products = await getProductForNavbar(session?.user?.email);
  console.log(products);

  const ids = products?.map((pd) => pd?.pId);
  // console.log(ids);
  const allproduct = await getProductByIds(ids);
  // console.log(allproduct?.length);

  return (
    <>
      <h2 className="mx-auto mt-12 space-y-4 max-w-6xl text-2xl  font-medium text-gray-800 uppercase mb-6">
        Your Wish List :
      </h2>
      <WhitelistArea allproduct={allproduct} />
    </>
  );
}
