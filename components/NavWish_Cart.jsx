"use client";
import { useEffect, useState } from "react";

export default function NavWish_Cart({ cartL, wishL }) {
  // const { cart, setCart } = useCart();
  // const { wishList, setWishList } = useWishList();
  // useEffect(() => {
  //   setCart(cartL?.length);
  //   setWishList(wishL?.length);
  // }, []);
  const [myCart, setMyCart] = useState(cartL);
  const [myWish, setMyWish] = useState(wishL);

  useEffect(() => {
    setMyCart(cartL);
    setMyWish(wishL);
  }, [cartL, wishL]);

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
        <div className="absolute right-[-20px] -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {myWish?.length}
        </div>
      </a>

      {/* cart in navbar */}
      <a
        href="/cart"
        className=" pl-3 text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
        <div className="text-xs leading-3">Cart</div>
        <div className="absolute right-[-20px] -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {myCart?.length}
        </div>
      </a>
    </>
  );
}
