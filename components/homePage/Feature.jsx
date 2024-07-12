import { getDictionary } from "@/app/[lang]/disctionaries";
import Image from "next/image";

export default async function Feature({ lang }) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            width={150}
            height={100}
            src="/icons/delivery-van.svg"
            alt="Food image"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              {dictionary?.freeShipping}
            </h4>
            <p className="text-gray-500 text-sm">Order over $200</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            width={150}
            height={100}
            src="/icons/money-back.svg"
            alt="Food image"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              {dictionary?.moneyRturns}
            </h4>
            <p className="text-gray-500 text-sm">30 days money returs</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            width={150}
            height={100}
            src="/icons/service-hours.svg"
            alt="Food image"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              {dictionary?.support}
            </h4>
            <p className="text-gray-500 text-sm">Customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
