"use client";

export default function Sidebar({
  allCategoryData,
  filterOption,
  setSearchFilterOption,
}) {
  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb  md:block">
      <div className="divide-y divide-gray-200 space-y-5">
        {/* category wise filter */}
        <div>
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Categories
          </h3>
          <div className="space-y-2">
            {allCategoryData?.map((ct) => (
              <div
                onClick={(e) =>
                  setSearchFilterOption({
                    ...filterOption,
                    category_name: ct?.category_name,
                  })
                }
                key={ct?.id}
                className="flex items-center"
              >
                <input
                  type="radio"
                  name="cat-1"
                  id="cat-1"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="cat-1"
                  className="text-gray-600 ml-3 cusror-pointer"
                >
                  {ct?.category_name}
                </label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
            ))}
          </div>
        </div>

        {/* price wise filter */}
        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Price
          </h3>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              name="min"
              id="min"
              className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="min"
              onBlur={(e) =>
                setSearchFilterOption({
                  ...filterOption,
                  minPrice: e?.target?.value,
                })
              }
            />
            <span className="mx-3 text-gray-500">-</span>
            <input
              type="text"
              name="max"
              id="max"
              className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="max"
              onBlur={(e) =>
                setSearchFilterOption({
                  ...filterOption,
                  maxPrice: e?.target?.value,
                })
              }
            />
          </div>
        </div>

        {/* filter by search */}
        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            size
          </h3>
          <div className="flex items-center gap-2">
            <div className="size-selector">
              <input type="radio" name="size" id="size-xs" className="hidden" />
              <label
                onClick={(e) =>
                  setSearchFilterOption({
                    ...filterOption,
                    size: "xs",
                  })
                }
                htmlFor="size-xs"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XS
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-sm" className="hidden" />
              <label
                onClick={(e) =>
                  setSearchFilterOption({
                    ...filterOption,
                    size: "s",
                  })
                }
                htmlFor="size-sm"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-m" className="hidden" />
              <label
                onClick={(e) =>
                  setSearchFilterOption({
                    ...filterOption,
                    size: "m",
                  })
                }
                htmlFor="size-m"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-l" className="hidden" />
              <label
                onClick={(e) =>
                  setSearchFilterOption({
                    ...filterOption,
                    size: "l",
                  })
                }
                htmlFor="size-l"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-xl" className="hidden" />
              <label
                onClick={(e) =>
                  setSearchFilterOption({
                    ...filterOption,
                    size: "xl",
                  })
                }
                htmlFor="size-xl"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XL
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
