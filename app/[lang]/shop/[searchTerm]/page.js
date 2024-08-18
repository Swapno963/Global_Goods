import SearchAndFilterArea from "@/components/shop/SearchAndFilterArea";
import { getAllCategory, getSearchProduct } from "@/database/queries";

export default async function page({ params: { searchTerm } }) {
  const searchResult = await getSearchProduct(searchTerm);
  const allCategoryData = await getAllCategory();

  return (
    <div className="py-12">
      <div className="w-3/5 mx-auto ">
        <SearchAndFilterArea
          searchResult={searchResult}
          allCategoryData={allCategoryData}
          searchTerm={searchTerm}
          category_name=""
        />
      </div>
    </div>
  );
}
