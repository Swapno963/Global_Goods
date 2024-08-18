import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-4/5  mx-auto flex-row sm:flex justify-around  pt-12 ">
        {/* help */}
        <div className="inline-block ">
          <h2 className="text-2xl font-semibold text-primary pb-4">
            Customer Care
          </h2>
          <p className="text-xl pb-1">Help Center</p>
          <p className="text-xl py-1">How to Buy</p>
          <p className="text-xl py-1">Returns & Refunds</p>
          <p className="text-xl py-1">Contact Us</p>
          <p className="text-xl py-1">Terms & Conditions</p>
        </div>
        {/* daraz */}
        <div className="inline-block pl-[10%] md:pl-[0px]">
          <h2 className="text-2xl font-semibold text-primary pb-4">Daraz</h2>
          <p className="text-xl pb-1">About</p>
          <p className="text-xl py-1">Paynment</p>
          <p className="text-xl py-1">Card</p>
          <p className="text-xl py-1">Blog</p>
          <p className="text-xl py-1">Mart</p>
        </div>
        {/* country */}
        <div>
          <h2 className="text-2xl font-semibold text-primary pb-4">
            Daraz International
          </h2>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="flex gap-3">
              <Image
                width={150}
                height={100}
                className="w-[30px] rounded-md"
                src="/usa.png"
                alt=""
              />
              <p className="text-xl ">Usa</p>
            </div>
            <div className="flex gap-3">
              <Image
                width={150}
                height={100}
                className="w-[30px] rounded-md"
                src="/aus.png"
                alt=""
              />
              <p className="text-xl ">australia</p>
            </div>
            <div className="flex gap-3">
              <Image
                width={150}
                height={100}
                className="w-[30px] rounded-md"
                src="/canada.png"
                alt=""
              />
              <p className="text-xl ">Canada</p>
            </div>
            <div className="flex gap-3">
              <Image
                width={150}
                height={100}
                className="w-[30px] rounded-md"
                src="/bd.png"
                alt=""
              />
              <p className="text-xl ">Bangladesh</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-primary pb-4 pt-6">
            Follow Us On
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div className="flex gap-3">
              <Image
                width={150}
                height={100}
                className="w-[30px] rounded-md"
                src="/usa.png"
                alt=""
              />
              <Image
                width={150}
                height={100}
                className="w-[30px] rounded-md"
                src="/usa.png"
                alt=""
              />
              <Image
                width={150}
                height={100}
                className="w-[30px] rounded-md"
                src="/usa.png"
                alt=""
              />
              <Image
                width={150}
                height={100}
                className="w-[30px] rounded-md"
                src="/usa.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* qr code and app stores */}
        <div>
          <h2 className="text-2xl font-semibold text-primary pb-4">
            Exclusive Deals and Offers!
          </h2>
          <div className="grid grid-cols-2">
            <div>
              <Image
                width={150}
                height={100}
                className="w-[150px] h-[150px]"
                src="/qr_code.png"
                alt=""
              />
            </div>
            <div>
              <Image
                width={150}
                height={100}
                className="w-[100px] h-[50px] rounded-md py-1"
                src="/i_store.jpeg"
                alt=""
              />
              <Image
                width={150}
                height={100}
                className="w-[100px] h-[50px] rounded-md py-1"
                src="/google_store.png"
                alt=""
              />
              <Image
                width={150}
                height={100}
                className="w-[100px] h-[50px] rounded-md py-1"
                src="/app_gallary.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- copyright --> */}
      <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
          <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
          <div>
            <Image
              width={150}
              height={100}
              src="/methods.png"
              alt="Food image"
              style={{ width: "auto", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
