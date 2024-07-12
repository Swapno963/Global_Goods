"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";

export default function SearchAndFilterArea({
  searchResult,
  allCategoryData,
  searchTerm,
  category_name,
}) {
  const [showResult, setShowResult] = useState(searchResult);

  const [filterOption, setSearchFilterOption] = useState({
    minPrice: Number.MIN_SAFE_INTEGER,
    maxPrice: Number.MAX_SAFE_INTEGER,
    size: "",
    category_name: category_name,
    searchTerm: searchTerm,
  });
  const handelFilter = async () => {
    try {
      const response = await fetch("/api/auth/search_filter/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filterOption),
      });
      // res.status === 201 && router.push("/checkout");
      const data = await response.json();
      console.log("Search results:", data);
      setShowResult(data);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handelFilter();
  }, [filterOption]);

  // console.log(filterOption);
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4 bg-gray-200">
        <Sidebar
          allCategoryData={allCategoryData}
          filterOption={filterOption}
          setSearchFilterOption={setSearchFilterOption}
        />
      </div>
      <div className="col-span-8 bg-gray-300">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          Reasult
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12">
          {showResult?.map((pd) => (
            <ProductCard product={pd} key={pd?.id} />
          ))}
        </div>

        {/* <Products /> */}
      </div>
    </div>
  );
}
