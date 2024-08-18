import { auth } from "@/auth";
import Checkout from "@/components/checkout/Checkout";

export default async function CheckoutArea() {
  const session = await auth();

  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <p className="text-gray-600 font-2xl">Checkout</p>
      </div>
      <Checkout session={session} />
    </>
  );
}
