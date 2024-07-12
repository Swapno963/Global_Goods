import { auth } from "@/auth";
import { discountedPrice } from "@/utils/data-util";
import Image from "next/image";
import AddTooCart from "../AddTooCart";

export default async function WhitelistArea({ allproduct }) {
  const session = await auth();
  console.log(allproduct);
  return (
    <>
      <div className="container gap-6 pt-4 pb-16">
        {allproduct?.length == 0 && (
          <p className="pl-12 ml-12">
            You Do not Have any product in you Wish List,
            <a href="/shop/" className="text-blue-600 font-bold">
              Click hear
            </a>{" "}
            To add product in Wish List!
          </p>
        )}

        <div className="mx-auto space-y-4 max-w-6xl">
          {allproduct?.map((pd) => (
            <div
              key={pd?.id}
              className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
            >
              <div className="w-28">
                <Image
                  width={150}
                  height={100}
                  src={pd?.img_url[0]}
                  alt="Food image"
                  className="w-full"
                />
              </div>
              <div className="w-1/3">
                <h2 className="text-gray-800 text-xl font-medium uppercase">
                  {pd?.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  Availability:{" "}
                  <span className="text-green-600">
                    {pd?.inventory_count > 0 ? "In Stock" : "Out Of Stock"}
                  </span>
                </p>
              </div>
              <div className="text-primary text-lg font-semibold">
                $ {discountedPrice(pd?.price, pd?.discount)}
              </div>
              <AddTooCart product={pd} session={session} />

              <div className="text-gray-600 cursor-pointer hover:text-primary">
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
