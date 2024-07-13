"use server";
import { auth } from "@/auth";
import {
  getAllCategory,
  getProductForCheckout,
  getProductForNavbar,
} from "@/database/queries";
import Image from "next/image";
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

  if (process.env.NODE_ENV === "development") {
    console.log(
      "from navbar",
      session,
      "cartList",
      cartList,
      "wishList\n:",
      wishList
    );
    console.log("session?.user", session?.user);
  }

  return (
    <>
      <div className="w-full">
        <header className="py-4 shadow-sm bg-white">
          <div className="container flex items-center justify-between">
            <a href="/" className="h-32 w-[175px]">
              <Image
                width={200}
                height={100}
                src="/global_goods.png"
                alt="Global Goods Logo"
                className="object-none overflow-hidden"
              />
            </a>

            <NavSearch />
            <div className="flex items-center space-x-4">
              {/* <NavInfo session={session} /> */}
              <NavWish_Cart cartL={cartList} wishL={wishList} />

              {session?.user ? (
                <>
                  {console.log(
                    "Inside JSX: session?.user?.email",
                    session?.user?.email
                  )}
                  <a
                    href="/account"
                    className="text-center text-gray-700 hover:text-primary transition relative"
                  >
                    <div className="text-2xl">
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="text-xs leading-3">
                      Account | {session?.user?.name} {session?.user?.email}
                    </div>
                  </a>
                  <div className="text-md leading-3 font-bold text-red-600">
                    <Signout />
                  </div>
                </>
              ) : (
                <a
                  href="/login"
                  className="text-gray-200 hover:text-white transition"
                >
                  Login
                </a>
              )}
            </div>
          </div>
        </header>

        <nav className="bg-gray-800">
          <div className="container flex">
            <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group">
              <span className="text-white">
                <i className="fa-solid fa-bars"></i>
              </span>
              <span className="capitalize ml-2 text-white">All Categories</span>

              <div
                className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300  group-hover:visible w-[600px]"
                style={{ width: "300px" }}
              >
                {allCategoryData?.map((cat) => (
                  <a
                    key={cat?.id}
                    href={`/category/${cat?.category_name}`}
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <Image
                      width={150}
                      height={100}
                      src={cat?.img_url}
                      alt={`${cat?.category_name} image`}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="ml-6 text-gray-600 text-sm">
                      {cat?.category_name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
              <div className="flex items-center space-x-6 capitalize">
                <a
                  href="/"
                  className="text-gray-200 hover:text-white transition"
                >
                  Home
                </a>
                <a
                  href="/shop/"
                  className="text-gray-200 hover:text-white transition"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Contact us
                </a>
              </div>

              <div>
                <a
                  href="/login"
                  className="text-gray-200 hover:text-white transition"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="pl-3 text-gray-200 hover:text-white transition"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
