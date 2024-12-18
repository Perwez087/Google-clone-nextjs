import Link from "next/link"
import PaginationButtons from "./PaginationButtons"

const WebSearchResults = ({results}) => {
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
       <p className="text-gray-600 text-sm mb-5 mt-3">
          About {results.searchInformation?.formattedTotalResults} {"     "} 
          results ({results.searchInformation?.formattedSearchTime} seconds)
       </p>
       {
        results?.items?.map((result)=>{
            return <div className="mb-8 max-w-xl" key={result.link}>
                <div className="flex flex-col group">
                    <Link className="text-sm truncate" href={result.link}>{result.formattedUrl}</Link>
                    <Link className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800" href={result.link}>{result.title}</Link>
                </div>
                <p className="text-gray-600">{result.htmlSnippet}</p>
            </div>
        })
       }
       <div className="mt-10">
            <PaginationButtons/>
        </div>
    </div>
  )
}

export default WebSearchResults
