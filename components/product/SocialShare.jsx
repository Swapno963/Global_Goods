"use client";

import { usePathname } from "next/navigation";
import { FacebookShareButton, TwitterShareButton } from "react-share";

export default function SocialShare({ showModal, setShowModal }) {
  // const currentPageUrl = window?.location.href;
  const currentPageUrl = usePathname();

  const handelFbShare = () => {
    console.log("Current location is :", currentPageUrl);
  };
  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300 bg-opacity-80">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative h-[200px] flex items-center justify-center">
            <button
              onClick={() => setShowModal(!showModal)}
              className="bg-red-500 py-2 px-5  rounded-xl text-white absolute right-1 top-1 hover:bg-red-400"
            >
              Close
            </button>

            <div className="flex items-center justify-center my-auto">
              {/* fb share */}
              <FacebookShareButton
                url={currentPageUrl}
                quote="Please Share this post"
                hastag="#Food"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M8.7 10.7l6.6 -3.4" />
                  <path d="M8.7 13.3l6.6 3.4" />
                </svg>
                <span>Fb Share</span>
              </FacebookShareButton>
              {/* twitter */}
              <TwitterShareButton
                url={currentPageUrl}
                quote="Please Share this post"
                hastag="#Food"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M8.7 10.7l6.6 -3.4" />
                  <path d="M8.7 13.3l6.6 3.4" />
                </svg>
                <span>Twitter Share</span>
              </TwitterShareButton>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
