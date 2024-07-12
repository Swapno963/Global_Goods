import { getAccountInfoByEmail } from "@/database/queries";
import CheckoutForm from "./CheckoutForm";
import OrderSummery from "./OrderSummery";

export default async function Checkout({ session }) {
  const ourUser = await getAccountInfoByEmail(session?.user?.email);
  console.log("session", session);
  console.log("ourUser", ourUser);
  return (
    <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
      <div className="col-span-8 border border-gray-200 p-4 rounded">
        <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
        <CheckoutForm ourUser={ourUser} session={session} />
      </div>

      <OrderSummery session={session} />
    </div>
  );
}
