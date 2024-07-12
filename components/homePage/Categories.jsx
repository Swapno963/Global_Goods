import { getDictionary } from "@/app/[lang]/disctionaries";
import { getAllCategory } from "@/database/queries";
import Image from "next/image";

export default async function Categories({ lang }) {
  const dictionary = await getDictionary(lang);

  const allCategoryData = await getAllCategory();
  // console.log("from all category", allCategoryData);
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {dictionary?.shopByCategory}
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {allCategoryData?.map((category) => (
          <div
            key={category?.id}
            className="relative rounded-sm overflow-hidden group"
          >
            <Image
              width={400}
              height={200}
              src={category?.img_url}
              alt="Food image"
              className="w-full"
            />
            <a
              href={`/category/${category?.category_name}`}
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              {category?.category_name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
