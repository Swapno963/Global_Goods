"use client";

import { useWishList } from "@/app/hooks/useWishList";
import { useRouter } from "next/navigation";
// for tost
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddToWishList({ product, session }) {
  const { wishList, setWishList } = useWishList();

  const router = useRouter();

  async function handelClick() {
    console.log("clicked :", product);
    console.log("session :", session);
    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(router.asPath)}`);
    } else {
      // we have user
      try {
        const res = await fetch("/api/auth/wishList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product?.id,
            userEmail: session?.user?.email,
          }),
        });

        if (res.status === 201) {
          toast.success("Product Added To WishList");
          setWishList((p) => p + 1);
          router.push("/wishList");
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    }
  }

  // function incriseWish() {
  //   setWishList((p) => p + 1);
  //   console.log("clicked");
  // }
  return (
    <>
      <ToastContainer />

      <p
        onClick={handelClick}
        className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition cursor-pointer"
      >
        Wishlist
      </p>
    </>
  );
}
