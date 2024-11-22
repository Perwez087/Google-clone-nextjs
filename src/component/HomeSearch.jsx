"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export const HomeSearch = () => {
  const router = useRouter();  
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input.trim())
       return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () =>{
    setRandomSearchLoading(true);
    const response = await fetch('https://random-word-api.herokuapp.com/word');
    const data = await response.json();
    const result = data[0];
    if(!result) return;
    router.push(`/search/web?searchTerm=${result}`)
    setRandomSearchLoading(false);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[90%] border border-gray-200 px-5 py-3 mt-5 rounded-full mx-auto hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          value={input}
          className="flex-grow outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex md:flex-row flex-col justify-center gap-4 mt-4">
        <button onClick={handleSubmit} className="btn">Google Search</button>
        <button onClick={randomSearch} className="btn flex items-center justify-center">
          {randomSearchLoading ? (
            <img src="spinner.svg" alt="loading..." className="h-6 text-center"/>
          ) : ("I Am Feeling Lucky")}
        </button>
      </div>
    </>
  );
};
