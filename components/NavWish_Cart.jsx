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
        className="text-center text-gray-300 hover:text-primary transition relative flex justify-center items-center"
      >
        {/* <div className="text-2xl">
          <i className="fa-regular fa-heart"></i>
        </div> */}
        <div className="text-xs leading-3 text-gray-300">Wishlist</div>
        <div className="absolute right-[-23px] top-[-2px] w-5 h-5 rounded-full flex items-center justify-center bg-white text-gray-800 text-xs">
          {!myWish?.length ? "0" : myWish?.length}
        </div>
      </a>

      {/* cart in navbar */}
      <a
        href="/cart"
        className=" pl-3 text-center text-gray-300 hover:text-primary transition relative flex justify-center items-center"
      >
        <div className="text-xs leading-3">Cart</div>
        <div className="absolute right-[-23px] top-[-2px] w-5 h-5 rounded-full flex items-center justify-center bg-white text-gray-800 text-xs">
          {!myCart?.length ? "0" : myCart?.length}
        </div>
      </a>
    </>
  );
}
