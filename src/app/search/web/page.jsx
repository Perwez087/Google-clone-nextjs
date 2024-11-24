"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const WebSearchPage = () => {
  const [results,setResults] = useState(null);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');

  const handleGoogleApi = async () => {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchTerm}`
    );
    const data = await response.json();
    setResults(data.items);

    if(!data.items){
      return <h1>No result found</h1>
    }
  };

  useEffect(() => {
    handleGoogleApi();
  }, [searchTerm]);

  return (
    <>
     {results ? results.map((result,idx) =>{
         return <h1 key={idx}>{result.title}</h1>
     }): (
      <div className="flex item-center justify-center pt-10">
        <h1 className="text-xl">No result found</h1>
      </div>
     )}
  </>
  )
};

export default WebSearchPage;
