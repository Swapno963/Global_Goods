"use server";
import { auth } from "@/auth";
import {
  getAllCategory,
  getProductForCheckout,
  getProductForNavbar,
} from "@/database/queries";
import NavSearch from "./NavSearch";
import NavWish_Cart from "./NavWish_Cart";
import Signout from "./auth/Signout";

export default async function Navbar() {
  const session = await auth();
  const allCategoryData = await getAllCategory();
  let cartList;
  let wishList;
  if (session?.user) {
    cartList = await getProductForCheckout(session?.user?.email);
    wishList = await getProductForNavbar(session?.user?.email);
  }

  // if (process.env.NODE_ENV === "development") {
  //   console.log(
  //     "from navbar",
  //     session,
  //     "cartList",
  //     cartList,
  //     "wishList\n:",
  //     wishList
  //   );
  // }
  // console.log("session?.user", session);

  return (
    <>
      <div>
        <div className="w-full sm:w-4/5 mx-auto flex-row sm:flex sm:justify-around  justify-around items-center bg-base rounded-md md:py-6">
          <div className="flex justify-center">
            {/* <Image
              width={120}
              height={50}
              src="/global_goods.png"
              alt="Global Goods Logo"
              className="object-none overflow-hidden"
            />{" "} */}
            <a href="/" className="text-white font-extrabold text-3xl">
              Global <br /> Goods
            </a>
          </div>
          <div className="md:w-[45%]">
            <NavSearch />
          </div>
          <div className="flex justify-center  text-white font-bold gap-8">
            <NavWish_Cart cartL={cartList} wishL={wishList} />

            {session?.user ? (
              <>
                {console.log(
                  "Inside JSX: session?.user?.email",
                  session?.user?.email
                )}
                <a
                  href="/account"
                  className="text-center text-gray-100  transition relative"
                >
                  <div className="text-2xl">
                    <i className="fa-regular fa-user"></i>
                  </div>
                  <div className="text-xs leading-3 underline">
                    Account |{" "}
                    {session?.user?.name
                      ? session?.user?.name
                      : session?.user?.email?.split("@")[0]}
                  </div>
                </a>
                <div className="text-md leading-3 font-bold text-red-600">
                  <Signout />
                </div>
              </>
            ) : (
              <>
                <button className=" rounded-md  pl-7 py-3">
                  <a
                    href="/login"
                    className=" font-bold text-gra hover:text-gray-300 transition"
                  >
                    Login
                  </a>
                </button>
                <button className=" rounded-md   py-3">
                  <a
                    href="/register"
                    className=" font-bold text-gra hover:text-gray-300 transition"
                  >
                    Register
                  </a>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
