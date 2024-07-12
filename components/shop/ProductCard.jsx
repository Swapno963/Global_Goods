import { discountedPrice } from "@/utils/data-util";
import Image from "next/image";
import ProductSchemaScript from "../meta/ProductSchemaScript";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      <ProductSchemaScript product={product} />
      <div className="relative">
        <Image
          width={150}
          height={100}
          src={product?.img_url[0]}
          alt="Food image"
          className="w-full h-full rounded-lg object-contain"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
      justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart"></i>
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href={`/product/${product?.id}`}>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product?.title}
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">
            ${discountedPrice(product?.price, product?.discount)}
          </p>
          <p className="text-sm text-gray-400 line-through">
            ${product?.price}
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-1">
            Review : ({product?.reviewCount})
          </div>
        </div>
      </div>
    </div>
  );
}
