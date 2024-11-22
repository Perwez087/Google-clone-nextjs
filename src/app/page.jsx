import { HomeHeader } from "@/component/HomeHeader";
import { HomeSearch } from "@/component/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />

      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        <Image
          width={300}
          height={100}
          src={
            "https://freelogopng.com/images/all_img/1657952217google-logo-png.png"
          }
          alt="google"
        />
        <HomeSearch/>
      </div>
    </>
  );
}
