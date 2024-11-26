import Link from "next/link"
import PaginationButtons from "./PaginationButtons"

const ImageSearchResults = ({results}) => {
  return (
    <div className="sm:pb-24 pb-40 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
            {results?.items?.map((result)=>(
                <div key={result.link} className="">
                   <div className="group">
                      <Link href={result.image.contextLink}>
                          <img src={result.link} alt={result.title} className="group-hover:shadow-xl w-full object-contain transition-shadow" />
                      </Link>
                      <Link href={result.image.contextLink}>
                          <h2 className="group-hover:underline truncate text-md">{result.title}</h2>
                      </Link>
                      <Link href={result.image.contextLink}>
                          <p className="group-hover:underline text-gray-600">{result.displayLink}</p>
                      </Link>
                   </div>
                </div>
            ))}
        </div>
        <div className="ml-16 mt-10">
            <PaginationButtons/>
        </div>
    </div>
  )
}

export default ImageSearchResults
