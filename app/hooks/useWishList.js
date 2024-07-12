import { useContext } from "react";
import { WishListContext } from "../contexts";

export const useWishList = () => {
  const { wishList, setWishList } = useContext(WishListContext);

  return { wishList, setWishList };
};
