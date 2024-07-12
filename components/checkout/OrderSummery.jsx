import { getProductByIds, getProductForCheckout } from "@/database/queries";
import GeneratePdf from "./GeneratePdf";

export default async function OrderSummery({ session }) {
  const products = await getProductForCheckout(session?.user?.email);
  const ids = products?.map((pd) => pd?.pId);
  // console.log(ids);
  const allproduct = await getProductByIds(ids);
  // console.log(allproduct?.length);

  const sum = allproduct.reduce(
    (accumulator, currentValue) => accumulator + currentValue?.price,
    0
  );

  return (
    <div className="col-span-4 border border-gray-200 p-4 rounded">
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        order summary
      </h4>

      <div className="space-y-2">
        {allproduct?.map((p) => (
          <div key={p?._id} className="flex justify-between">
            <div>
              <h5 className="text-gray-800 font-medium">{p?.title}</h5>
              <p className="text-sm text-gray-600">Size: {p?.size}</p>
            </div>
            <p className="text-gray-600">x1</p>
            <p className="text-gray-800 font-medium">$ {p?.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>subtotal</p>
        <p>${sum}</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>shipping</p>
        <p>Free</p>
      </div>

      <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p className="font-semibold">Total</p>
        <p>${sum}</p>
      </div>

      {/* agree terms and condition */}
      <div className="flex items-center mb-4 mt-2">
        <input
          type="checkbox"
          name="aggrement"
          id="aggrement"
          className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
        />
        <label
          htmlhtmlFor="aggrement"
          className="text-gray-600 ml-3 cursor-pointer text-sm"
        >
          I agree to the{" "}
          <a href="#" className="text-primary">
            terms & conditions
          </a>
        </label>
      </div>

      <GeneratePdf allproduct={allproduct} userEmail={session?.user?.email} />
    </div>
  );
}
