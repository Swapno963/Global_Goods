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
            <h2 className="text-white font-extrabold text-3xl">
              Global <br /> Goods
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="w-full">
              <NavSearch />
            </div>
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
              <>
                <button className=" rounded-md  pl-7 py-3">
                  <a
                    href="/login"
                    className=" font-bold text-gra hover:text-blue-600 transition"
                  >
                    Login
                  </a>
                </button>
                <button className=" rounded-md   py-3">
                  <a
                    href="/register"
                    className=" font-bold text-gra hover:text-blue-600 transition"
                  >
                    Register
                  </a>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* new nav end  */}
      {/* <div className="w-full">
        <header className="py-4 shadow-sm bg-white">
          <div className="container flex items-center justify-between">
            <a href="/" className="h-32 w-[175px]">
              <Image
                width={120}
                height={100}
                src="/global_goods.png"
                alt="Global Goods Logo"
                className="object-none overflow-hidden"
              />
            </a>

            <NavSearch />
            <div className="flex items-center space-x-4">
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
                <>
                  <button className=" rounded-md  pl-7 py-3">
                    <a
                      href="/login"
                      className=" font-bold text-gra hover:text-blue-600 transition"
                    >
                      Login
                    </a>
                  </button>
                  <button className=" rounded-md   py-3">
                    <a
                      href="/register"
                      className=" font-bold text-gra hover:text-blue-600 transition"
                    >
                      Register
                    </a>
                  </button>
                </>
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
                className=" hover:block absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300  group-hover:visible w-[600px]"
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
              </div>
            </div>
          </div>
        </nav>
      </div> */}
    </>
  );
}
