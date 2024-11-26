"use client";

import WebSearchResults from "@/component/WebSearchResults";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const WebSearchPage = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = searchParams.get("start") || "1";

  const handleGoogleApi = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch search results.");
      }

      const data = await response.json();

      if (!data.items) {
        setResults(null);
        return;
      }

      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error on every new request
    handleGoogleApi();
  }, [searchTerm, startIndex]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  if (!results?.items) return <h1>No results found</h1>;

  return <WebSearchResults results={results} />;
};

export default WebSearchPage;
