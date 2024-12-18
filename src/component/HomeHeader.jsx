import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export const HomeHeader = () => {
  return (
    <header className="flex justify-end p-5">
      <div className="flex items-center gap-6">
        <Link href={"https://mail.google.com"} className="hover:underline">
          Gmail
        </Link>
        <Link href={"https://image.google.com"} className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 p-1 rounded-full text-3xl cursor-pointer" />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
};
