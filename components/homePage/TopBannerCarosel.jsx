"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
export default function TopBannerCarosel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides?.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides?.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [slides.length]); // Dependency on slides.length

  const styles = {
    container: {
      display: "flex",
      transition: "transform 1s ease-out",
      transform: `translateX(-${current * 100}%)`,
    },
    image: {
      minWidth: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "20px",
    },
  };

  return (
    <div className="overflow-hidden relative max-h-[80%]">
      <div style={styles.container}>
        {slides?.map((s) => {
          // <img style={styles.image} key={s} src={s} />
          return (
            <Image
              style={styles.image}
              key={s}
              width={800}
              height={300}
              src={s}
              alt="Global Goods Logo"
              className="object-none overflow-hidden"
            />
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides?.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
