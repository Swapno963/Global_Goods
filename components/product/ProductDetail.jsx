"use client";
import { discountedPrice } from "@/utils/data-util";
import Image from "next/image";
import { useState } from "react";
import AddToWishList from "../AddToWishList";
import AddTooCart from "../AddTooCart";
import SocialShare from "./SocialShare";

export default function ProductDetail({ product, session }) {
  console.log(product);
  const [quantity, setQuantity] = useState(1);
  const [bigImg, setBigImg] = useState(product?.img_url[0]);
  const [showModal, setShowModal] = useState(false);

  const handelQuantity = (operation) => {
    if (operation == "+") {
      setQuantity((p) => p + 1);
    } else {
      if (quantity == 1) {
        alert("Quantity can't be zero!");
      } else {
        setQuantity((p) => p - 1);
      }
    }

    console.log(quantity);
  };
  return (
    <div className="container grid grid-cols-2 gap-6 pb-[120px]">
      {/* modal for share */}
      <SocialShare showModal={showModal} setShowModal={setShowModal} />
      {/* image */}
      <div>
        <Image
          width={150}
          height={100}
          src={bigImg}
          alt="Food image"
          className="w-full h-full"
        />
        <div className="grid grid-cols-5 gap-4 m-4 ">
          <Image
            width={150}
            height={100}
            src={product?.img_url[0]}
            alt="Food image"
            className={`w-full cursor-pointer border p-4 ${
              bigImg === product?.img_url[0]
                ? "border-green-700"
                : "border-primary"
            }`}
            onClick={() => setBigImg(product?.img_url[0])}
          />
          <Image
            width={150}
            height={100}
            src={product?.img_url[1]}
            onClick={() => setBigImg(product?.img_url[1])}
            alt="Food image"
            className={`w-full cursor-pointer border p-4 ${
              bigImg === product?.img_url[1]
                ? "border-green-700"
                : "border-primary"
            }`}
          />
          <Image
            width={150}
            height={100}
            src={product?.img_url[2]}
            onClick={() => setBigImg(product?.img_url[2])}
            alt="Food image"
            className={`w-full cursor-pointer border p-4 ${
              bigImg === product?.img_url[2]
                ? "border-green-700"
                : "border-primary"
            }`}
          />
          <Image
            width={150}
            height={100}
            src={product?.img_url[3]}
            onClick={() => setBigImg(product?.img_url[3])}
            alt="Food image"
            className={`w-full cursor-pointer border p-4 ${
              bigImg === product?.img_url[3]
                ? "border-green-700"
                : "border-primary"
            }`}
          />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-medium uppercase mb-2">
          {product?.title}
        </h2>
        <div className="flex items-center mb-4">
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
          <div className="text-xs text-gray-500 ml-3">
            ({product?.reviewCount} Reviews)
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-gray-800 font-semibold space-x-2">
            <span>Availability: </span>
            {product?.inventory_count > 0 ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out Of Stock</span>
            )}
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">Brand: </span>
            <span className="text-gray-600">{product?.brand}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">Category: </span>
            <span className="text-gray-600">{product?.category_name}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">SKU: </span>
            <span className="text-gray-600">{product?.SKU}</span>
          </p>
        </div>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
          <p className="text-xl text-primary font-semibold">
            ${discountedPrice(product?.price, product?.discount)}
          </p>
          <p className="text-sm text-gray-400 line-through">
            ${product?.price}
          </p>
        </div>

        <p className="mt-4 text-gray-600">{product?.detail}</p>

        <div className="mt-4">
          <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
          <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
            <div
              onClick={() => handelQuantity("-")}
              className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            >
              -
            </div>
            <div className="h-8 w-8 text-base flex items-center justify-center">
              {quantity}
            </div>
            <div
              onClick={() => handelQuantity("+")}
              className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            >
              +
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
          {/* add to cart */}
          <AddTooCart session={session} product={product} quantity={quantity} />

          {/* whitelist */}
          <AddToWishList session={session} product={product} />

          {/* social shareing */}
          <p
            onClick={() => setShowModal(!showModal)}
            className="border border-gray-300 bg-green-400 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-white transition"
          >
            <i className="fa-solid fa-heart"></i> Share On Socials
          </p>
        </div>

        <div className="flex gap-3 mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
