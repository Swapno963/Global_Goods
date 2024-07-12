"use client";

import { useState } from "react";
import BillingModal from "./BillingModal";
import PersonalInfoModal from "./PersonalInfoModal";
import ShippingModal from "./ShippingModal";

export default function AccountArea({ session, ourUser }) {
  console.log("ourUser", ourUser);
  console.log("session", session);
  const [accountInfo, setAccountInfo] = useState(
    ourUser || {
      personal_name: session?.user?.name,
      personal_email: session?.user?.email,
      personal_phone_no: "",
      shipping_name: "",
      shipping_address: "",
      shipping_phone_no: "",
      billing_name: "",
      billing_address: "",
      billing_phone_no: "",
      loginEmail: session?.user?.email,
    }
  );
  const [showP, setShowP] = useState(false);
  const [showS, setShowS] = useState(false);
  const [showB, setShowB] = useState(false);
  return (
    <>
      <div className=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          {/*For personal info */}
          {showP && (
            <PersonalInfoModal
              showP={showP}
              setShowP={setShowP}
              accountInfo={accountInfo}
              setAccountInfo={setAccountInfo}
            />
          )}

          {/* personal info */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              Personal Profile
            </h3>
            <p
              onClick={() => setShowP(!showP)}
              className="text-primary cursor-pointer"
            >
              Edit
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">
              Name : {accountInfo?.personal_name}
            </h4>
            <p className="text-gray-800">
              Email: {accountInfo?.personal_email}
            </p>
            <p className="text-gray-800">
              Phone No:{accountInfo?.personal_phone_no}
            </p>
          </div>
        </div>

        {/* shipping address */}
        {showS && (
          <ShippingModal
            showS={showS}
            setShowS={setShowS}
            accountInfo={accountInfo}
            setAccountInfo={setAccountInfo}
          />
        )}
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              Shipping address
            </h3>
            <p
              onClick={() => setShowS(!showS)}
              className="text-primary cursor-pointer"
            >
              Edit
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">
              Name : {accountInfo?.shipping_name}
            </h4>
            <p className="text-gray-800">
              Address : {accountInfo?.shipping_address}
            </p>
            <p className="text-gray-800">
              Shipping No :{accountInfo?.shipping_phone_no}
            </p>
          </div>
        </div>

        {/* Billing address */}
        {showB && (
          <BillingModal
            showB={showB}
            setShowB={setShowB}
            accountInfo={accountInfo}
            setAccountInfo={setAccountInfo}
          />
        )}
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              Billing address
            </h3>
            <p
              onClick={() => setShowB(!showB)}
              className="text-primary cursor-pointer"
            >
              Edit
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">
              Billing Name : {accountInfo?.billing_name}
            </h4>
            <p className="text-gray-800">
              Billing Address : {accountInfo?.billing_address}
            </p>
            <p className="text-gray-800">
              Billing No : {accountInfo?.billing_phone_no}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
