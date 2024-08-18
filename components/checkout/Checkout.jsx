import { replaceMongoIdInObject } from "@/utils/data-util";
import Link from "next/link";
import CheckoutForm from "./CheckoutForm";
import OrderSummery from "./OrderSummery";

export default function Checkout({ ourUser, session }) {
  const ourNewUser = replaceMongoIdInObject(ourUser);
  return (
    <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
      <div className="col-span-8 border border-gray-200 p-4 rounded">
        <div className="flex justify-between ">
          <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
          <Link className=" font-bold text-gray-700 underline" href="/account">
            Edit
          </Link>
        </div>
        <CheckoutForm ourUser={ourNewUser} />
      </div>

      <OrderSummery session={session} />
    </div>
  );
}
