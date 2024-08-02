import Image from "next/image";

export default function Ads() {
  return (
    <div className="container pb-16">
      <a href="#">
        <Image
          width={950}
          height={400}
          src="/offer.jpg"
          alt="Food image"
          className="w-full"
        />
      </a>
    </div>
  );
}
