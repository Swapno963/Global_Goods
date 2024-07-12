import SearchAndFilterArea from "@/components/shop/SearchAndFilterArea";
import { getAllCategory } from "@/database/queries";

export default async function CategoryPage({ params: { category_name } }) {
  const allCategoryData = await getAllCategory();

  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <a href="/" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Shop</p>
      </div>
      <SearchAndFilterArea
        searchResult={[]}
        allCategoryData={allCategoryData}
        searchTerm=""
        category_name={category_name}
      />
    </>
  );
}
