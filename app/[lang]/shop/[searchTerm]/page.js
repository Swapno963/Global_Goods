import SearchAndFilterArea from "@/components/shop/SearchAndFilterArea";
import { getAllCategory, getSearchProduct } from "@/database/queries";

export default async function page({ params: { searchTerm } }) {
  const searchResult = await getSearchProduct(searchTerm);
  const allCategoryData = await getAllCategory();

  // console.log("search reasult :", searchResult);
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
        searchResult={searchResult}
        allCategoryData={allCategoryData}
        searchTerm={searchTerm}
        category_name=""
      />
    </>
  );
}
