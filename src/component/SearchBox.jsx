"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl"
    >
      <input
        type="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="w-full focus:outline-none px-2"
      />
      <BsFillMicFill className="hidden sm:flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <AiOutlineSearch onClick={handleSubmit} className="text-2xl hidden sm:flex text-blue-500 cursor-pointer" />
    </form>
  );
};

export default SearchBox;
