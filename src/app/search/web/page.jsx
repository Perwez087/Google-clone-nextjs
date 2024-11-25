"use client";
import WebSearchResults from "@/component/WebSearchResults";
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
    setResults(data);

    if(!data.items){
      return <h1>No result found</h1>
    }
  };

  useEffect(() => {
    handleGoogleApi();
  }, [searchTerm]);

  console.log(results);

  return (
    <>
     {results && (<WebSearchResults results={results}/>)
      }
  </>
  )
};

export default WebSearchPage;
