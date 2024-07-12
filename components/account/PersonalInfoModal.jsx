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
          onClick={() => setShowP(!showP)}
          className="bg-red-500 py-2 px-5  rounded-xl text-white absolute right-1 top-1 hover:bg-red-400"
        >
          Close
        </button>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="text-gray-600">
              personal_name
            </label>
            <input
              onChange={hadelBlur}
              value={accountInfo?.personal_name}
              type="text"
              name="personal_name"
              id="company"
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="region" className="text-gray-600">
              personal_email
            </label>
            <input
              onChange={hadelBlur}
              value={accountInfo?.personal_email}
              type="text"
              name="personal_email"
              id="region"
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="address" className="text-gray-600">
              personal_phone_nos
            </label>
            <input
              onChange={hadelBlur}
              value={accountInfo?.personal_phone_no}
              type="text"
              name="personal_phone_no"
              id="address"
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
