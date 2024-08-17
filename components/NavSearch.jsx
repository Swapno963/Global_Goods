"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavSearch() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const handelSearch = () => {
    if (searchTerm == "") {
      console.log("empty");
    } else {
      console.log(searchTerm);
      router.push(`/shop/${searchTerm}`);
    }
  };
  return (
    <div className="w-full max-w-xl relative flex  ml-auto">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        onChange={(e) => setSearchTerm(e?.target?.value)}
        type="text"
        name="search"
        id="search"
        className="w-full border rounded-md border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none  md:flex"
        placeholder="search"
      />
      <button
        onClick={handelSearch}
        className="bg-[#4d6ac8] hover:bg-[#5f78ce] border border-primary rounded-md ml-3 text-white px-8 py-3 font-bold rounded-r-md  hover:text-primary transition  md:flex"
      >
        Search
      </button>
    </div>
  );
}
