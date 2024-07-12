import { useContext } from "react";
import { CartContext } from "../contexts";

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  return { cart, setCart };
};
