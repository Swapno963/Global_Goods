"use client";

import { useCart } from "@/app/hooks/useCart";
import { useWishList } from "@/app/hooks/useWishList";
import { doSignOut } from "../actions";

const Signout = () => {
  const { cart, setCart } = useCart();
  const { wishList, setWishList } = useWishList();

  const handelLogOut = async () => {
    setCart(0);
    setWishList(0);
    await doSignOut();
  };
  return (
    <form action={doSignOut}>
      <button type="submit" className="text-white  hover:text-gray-200">
        Sign Out
      </button>
    </form>
  );
};

export default Signout;
