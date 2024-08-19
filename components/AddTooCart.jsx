"use client";

import { useCart } from "@/app/hooks/useCart";
import { useRouter } from "next/navigation";
// for tost
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddTooCart({ product, session, quantity }) {
  const router = useRouter();
  const { cart, setCart } = useCart();
  async function handelClick() {
    console.log("clicked :", product);
    console.log("session :", session);
    if (!session) {
      router.push(`/login?redirect=/cart/23`);
    } else {
      // we have user
      try {
        const res = await fetch("/api/auth/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product?.id,
            userEmail: session?.user?.email,
            quantity: quantity,
          }),
        });
        console.log("response of cart : ", res, "\n cart is :", cart);

        if (res.status === 201) {
          toast.success("Product Added To Cart");
          setCart((p) => p + 1);
          // setCart(cart + 1);
          router.push("/checkout");
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    }
  }
  return (
    <>
      <ToastContainer />

      <p
        onClick={handelClick}
        className=" bg-base border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition hover:cursor-pointer"
      >
        Add to cart
      </p>
    </>
  );
}
