"use client";

import { useState } from "react";
import { CartContext } from "../contexts";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(null);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
