import { auth } from "@/auth";
import Checkout from "@/components/checkout/Checkout";
import { getAccountInfoByEmail } from "@/database/queries";

export default async function CheckoutArea() {
  const session = await auth();
  const ourUser = await getAccountInfoByEmail(session?.user?.email);

  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <p className="text-gray-600 font-2xl">Checkout</p>
      </div>
      <Checkout ourUser={ourUser} session={session} />
    </>
  );
}
