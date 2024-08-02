import { getDictionary } from "@/app/[lang]/disctionaries";
import TopBannerCarosel from "./TopBannerCarosel";

export default async function Banner({ lang }) {
  const dictionary = await getDictionary(lang);
  const category = [
    { id: 1, name: "Women's & Girls' Fashion" },
    { id: 2, name: "Health & Beauty" },
    { id: 3, name: "Watches, Bags, Jewellery" },
    { id: 4, name: "Men's & Boys' Fashion" },
    { id: 5, name: "Mother & Baby" },
    { id: 6, name: "Electronics Device" },
    { id: 7, name: "TV & Home Appliances" },
    { id: 8, name: "Electronic Accessories" },
    { id: 9, name: "Groceries & Pets" },
    { id: 10, name: "Home & Lifestyle" },
    { id: 11, name: "WSports & Outdoors" },
    { id: 12, name: "Automotive & Motorbike" },
  ];
  const slides = [
    "/top-1.jpg",
    "/top-2.png",
    "/top-3.jpg",
    "/top-4.jpg",
    "/top-5.jpg",
  ];
  return (
    // <div
    //   className="bg-cover bg-no-repeat bg-center py-36"
    //   style={{ backgroundImage: "url('banner-bg.jpg')" }}
    // >
    //   <div className="container">
    //     <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
    //       best collection for <br /> home decoration
    //     </h1>
    //     <p>
    //       Discover a seamless online shopping experience with our user-friendly{" "}
    //       <br />
    //       e-commerce platform, offering a wide range of products with detailed
    //       descriptions, <br /> high-quality images, and secure payment options.
    //       Enjoy fast delivery, hassle-free returns, <br /> and 24/7 customer
    //       support for a satisfying shopping journey
    //     </p>
    //     <div className="mt-12">
    //       <a
    //         href="#"
    //         className="bg-primary border border-primary text-white px-8 py-3 font-medium
    //             rounded-md hover:bg-transparent hover:text-primary"
    //       >
    //         {dictionary?.shopNow}
    //       </a>
    //     </div>
    //   </div>
    // </div>
    // starts
    <div className=" w-4/5 grid grid-cols-12 min-h-40 mx-auto gap-4">
      <div className="bg-gray-100 rounded-md  sm:col-span-2 col-span-12 pl-4 my-12  py-3 max-h-[70%]">
        {category?.map((ct) => (
          <p key={ct?.id} className="text-gray-500 text-lg pb-1 font-semibold">
            {ct?.name}
          </p>
        ))}
      </div>
      <div className="col-span-12 mt-6 rounded-md sm:col-span-10  py-6">
        <TopBannerCarosel slides={slides} />
      </div>
    </div>
  );
}
