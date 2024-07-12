"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShippingModal({
  showS,
  setShowS,
  accountInfo,
  setAccountInfo,
}) {
  const [error, setError] = useState();

  const hadelBlur = (e) => {
    let name = e?.target?.name;
    let value = e?.target?.value;
    setAccountInfo({ ...accountInfo, [name]: value });
    console.log(accountInfo);
  };

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
        toast.success("Shipping Address Updated!");
        setShowB(!showB);
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
          onClick={() => setShowS(!showS)}
          className="bg-red-500 py-2 px-5  rounded-xl text-white absolute right-1 top-1 hover:bg-red-400"
        >
          Close
        </button>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="shipping_name" className="text-gray-600">
              Shipping Name
            </label>
            <input
              onChange={hadelBlur}
              value={accountInfo?.shipping_name}
              type="text"
              name="shipping_name"
              id="shipping_name"
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="shipping_address" className="text-gray-600">
              Shipping Address
            </label>
            <input
              onChange={hadelBlur}
              value={accountInfo?.shipping_address}
              type="text"
              name="shipping_address"
              id="shipping_address"
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="shipping_phone_no" className="text-gray-600">
              Shipping No:
            </label>
            <input
              onChange={hadelBlur}
              value={accountInfo?.shipping_phone_no}
              type="text"
              name="shipping_phone_no"
              id="shipping_phone_no"
              className="input-box"
            />
          </div>

          <button
            onClick={handelSubmit}
            className="bg-green-400 text-white font-bold rounded-md py-2 px-3"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
