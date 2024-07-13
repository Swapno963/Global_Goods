"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function PersonalInfoModal({
  showP,
  setShowP,
  accountInfo,
  setAccountInfo,
}) {
  const hadelBlur = (e) => {
    let name = e?.target?.name;
    let value = e?.target?.value;
    setAccountInfo({ ...accountInfo, [name]: value });
    console.log(accountInfo);
  };
  const [error, setError] = useState();
  async function handelSubmit() {
    // let newAccount = { ...accountInfo, ["loginEmail"]: "s@g.com" };
    console.log(accountInfo);
    try {
      const res = await fetch("/api/auth/account_info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accountInfo }),
      });
      if (res.status === 201) {
        toast.success("Billing Address Updated!");
        setShowP(!showP);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300 bg-opacity-80">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-lg  w-[50%] relative h-[300px] flex items-center justify-center">
        {/* input area */}
        <button
          onClick={() => setShowP(!showP)}
          className="bg-red-500 py-2 px-5  rounded-xl text-white absolute right-1 top-1 hover:bg-red-400"
        >
          Close
        </button>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="personal_name"
              className="block text-gray-800 font-medium mb-2"
            >
              Personal Name
            </label>
            <input
              onChange={hadelBlur}
              value={accountInfo?.personal_name || ""}
              type="text"
              name="personal_name"
              id="personal_name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="personal_email"
              className="block text-gray-600 font-medium mb-2"
            >
              Personal Email
            </label>
            <input
              onChange={hadelBlur}
              value={accountInfo?.personal_email || ""}
              type="text"
              name="personal_email"
              id="personal_email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="personal_phone_no"
              className="block text-gray-600 font-medium mb-2"
            >
              Personal Phone Number
            </label>
            <input
              onChange={hadelBlur}
              value={accountInfo?.personal_phone_no || ""}
              type="text"
              name="personal_phone_no"
              id="personal_phone_no"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-6 pl-12">
            <button
              onClick={handelSubmit}
              className="bg-green-400 py-4 px-8 text-white font-bold rounded-md  text-xl"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
