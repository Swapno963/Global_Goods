"use client";
import { useCart } from "@/app/hooks/useCart";
import { useWishList } from "@/app/hooks/useWishList";
import { useEffect } from "react";

export default function NavWish_Cart({ cartL, wishL }) {
  const { cart, setCart } = useCart();
  const { wishList, setWishList } = useWishList();
  useEffect(() => {
    if (cartL?.length > 0) setCart(cartL?.length);
    else setCart(0);
    if (wishL?.length > 0) setCart(wishL?.length);
    else setWishList(0);
    // setWishList(wishL?.length);
  }, []);
  console.log(cartL);

  // const [myCart, setMyCart] = useState(cartL);
  // const [myWish, setMyWish] = useState(wishL);

  // useEffect(() => {
  //   setMyCart(cartL);
  //   setMyWish(wishL);
  // }, [cartL, wishL]);

  return (
    <>
      {/* wish list in navbar */}
      <a
        href="/wishList"
        className="text-center  transition relative flex justify-center items-center"
      >
        <div className="text-xs leading-3 text-white">Wishlist</div>
        <div
          className={`absolute right-[-23px] 
        
           w-5 h-5 rounded-full flex items-center justify-center bg-white text-gray-800 text-xs`}
        >
          {cart}
        </div>
      </a>

      {/* cart in navbar */}
      <a
        href="/cart"
        className=" pl-3 text-center  transition relative flex justify-center items-center"
      >
        <div className="text-xs leading-3 text-gray-300">Cart</div>
        <div
          className={`absolute right-[-23px] 
        
           w-5 h-5 rounded-full flex items-center justify-center bg-white text-gray-800 text-xs`}
        >
          {wishList}
        </div>
      </a>
    </>
  );
}
