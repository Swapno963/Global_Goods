"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import SocialLogins from "./SocialLogins";

export default function RegisterForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirm = formData.get("confirm");
      const role = formData.get("role");
      if (password != confirm) {
        setError("Password and Confirm Password didn't match!");
        return;
      } else {
        setError("");
      }
      console.log(name, role, password, confirm);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });
      const data = await res.json();
      res.status === 201 && router.push("/login");
      res.status === 409 && setError(data.message);

      console.log("the response is :", data);
    } catch (error) {
      console.log("the error is :", error);

      setError(error.message);
    }
  }
  return (
    <>
      <div className="contain py-16">
        <p className="text-xl text-red-500 text-center ">{error && error}</p>

        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">
            Create an account
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Register for new cosutumer
          </p>
          <form action="#" method="post" autoComplete="off" onSubmit={onSubmit}>
            <div className="space-y-2">
              <div>
                <label htmlFor="name" className="text-gray-600 mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="fulan fulana"
                />
              </div>
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
              <div>
                <label htmlFor="confirm" className="text-gray-600 mb-2 block">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm"
                  id="confirm"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="*******"
                />
              </div>

              {/* Role */}
              <label for="role" className="text-gray-600 mb-2 block">
                Select Your Role:
              </label>
              <select
                id="role"
                name="role"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm  focus:ring-0 focus:border-primary placeholder-gray-400"
              >
                <option value="vendor" className="my-2 text-md">
                  vendor
                </option>
                <option value="customer" className="my-2 text-md">
                  customer
                </option>
              </select>
              {/* end role */}
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="aggrement"
                  id="aggrement"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="aggrement"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  I have read and agree to the{" "}
                  <a href="#" className="text-primary">
                    terms & conditions
                  </a>
                </label>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                create account
              </button>
            </div>
          </form>

          {/* <!-- login with --> */}
          <div className="mt-6 flex justify-center relative">
            <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
              Or signup with
            </div>
            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
          </div>
          {/* <!-- ./login with --> */}
          <SocialLogins />
          <p className="mt-4 text-center text-gray-600">
            Already have account?{" "}
            <a href="login.html" className="text-primary">
              Login now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
