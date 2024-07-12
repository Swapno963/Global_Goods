"use client";
import { useCart } from "@/app/hooks/useCart";
import { useWishList } from "@/app/hooks/useWishList";
import { useEffect } from "react";

export default function NavWish_Cart({ cartL, wishL }) {
  const { cart, setCart } = useCart();
  const { wishList, setWishList } = useWishList();
  useEffect(() => {
    setCart(cartL?.length);
    setWishList(wishL?.length);
  }, []);

  return (
    <>
      {/* wish list in navbar */}
      <a
        href="/wishList"
        className="text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="text-xs leading-3">Wishlist</div>
        <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {wishList}
        </div>
      </a>

      {/* cart in navbar */}
      <a
        href="/cart"
        className="text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
        <div className="text-xs leading-3">Cart</div>
        <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {cart}
        </div>
      </a>
    </>
  );
}
