"use client";
import { useRouter } from "next/navigation";
import { login } from "../actions";
import SocialLogins from "./SocialLogins";

// for tost
// for tost
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const email = formData.get("email");
      const password = formData.get("password");

      const response = await login({ email, password });
      // console.log(email, password);
      // console.log(formData);
      // router.push("/");
      console.log("response from login:", response);
      console.log("router is :", router?.query);
      const redirect = router?.query?.redirect || "/";
      router.push(redirect);
    } catch (error) {
      // toast.warn("Plese Register first!");
      console.log(error);
    }
  }

  const handelDemoLogin = async () => {
    try {
      const response = await login({
        email: "swapno@gmail.com",
        password: "12",
      });

      console.log("response from login:", response);
      console.log("router is :", router?.query);
      const redirect = router?.query?.redirect || "/";
      router.push(redirect);
    } catch (error) {
      toast.warn("Plese Register first!");
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
          <p className="text-gray-600 mb-6 text-sm">welcome back customer</p>
          <form autoComplete="on" action="#" method="post" onSubmit={onSubmit}>
            <div className="space-y-2">
              <div>
                <label htmlFor="email" className="text-gray-600 mb-2 block">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="youremail.@domain.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-gray-600 mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="*******"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-primary">
                Forgot password
              </a>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                Login
              </button>
              <button
                onClick={handelDemoLogin}
                type="submit2"
                className="my-2 block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                Demo Login
              </button>
            </div>
          </form>

          {/* <!-- login with --> */}
          <div className="mt-6 flex justify-center relative">
            <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
              Or login with
            </div>
            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
          </div>
          <SocialLogins />
          {/* <!-- ./login with --> */}

          <p className="mt-4 text-center text-gray-600">
            Do not have account?
            <a href="/register" className="text-primary">
              Register now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
