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
  };

  useEffect(() => {
    handleGoogleApi();
  }, [searchTerm]);

  return (
    <>
     {results && results.map((result) =>{
         return <h1 key={result}>{result.title}</h1>
     })}
  </>
  )
};

export default WebSearchPage;
