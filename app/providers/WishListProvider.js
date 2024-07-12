"use client";

import { useState } from "react";
import { WishListContext } from "../contexts";

export default function WishListProvider({ children }) {
  const [wishList, setWishList] = useState(null);

  return (
    <WishListContext.Provider value={{ wishList, setWishList }}>
      {children}
    </WishListContext.Provider>
  );
}
