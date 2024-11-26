"use client";

import ImageSearchResults from "@/component/ImageSearchResults";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const ImageSearchPage = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = searchParams.get("start") || "1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchTerm}&searchType=image&start=${startIndex}`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, startIndex]);

  if (loading) return <p>Loading...</p>;

  if (!results?.items) return <h1>No results found</h1>;

  return (
    <Suspense fallback={<p>Loading images...</p>}>
      <ImageSearchResults results={results} />
    </Suspense>
  );
};

export default ImageSearchPage;
