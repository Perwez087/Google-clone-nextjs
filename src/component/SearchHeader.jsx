import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="w-full flex p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            width={120}
            height={40}
            src={
              "https://freelogopng.com/images/all_img/1657952217google-logo-png.png"
            }
            alt="logo"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="md:flex hidden gap-2">
          <RiSettings3Line className="header-icons" />
          <TbGridDots className="header-icons" />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
