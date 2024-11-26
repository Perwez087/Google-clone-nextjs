"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PaginationButtons = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  return (
    <Suspense>
      <div className="text-blue-700 flex pb-4 sm:gap-x-44 items-center w-full justify-between sm:justify-start">
        {startIndex >= 10 && (
          <Link
            href={`${pathname}?searchTerm=${searchTerm}&start=${
              startIndex - 10
            }`}
          >
            <div className=" flex flex-col cursor-pointer items-center hover:underline">
              <BsChevronLeft className="h-5" />
              <p>Previous</p>
            </div>
          </Link>
        )}
        {startIndex <= 90 && (
          <Link
            href={`${pathname}?searchTerm=${searchTerm}&start=${
              startIndex + 10
            }`}
          >
            <div className=" flex flex-col cursor-pointer items-center hover:underline">
              <BsChevronRight className="h-5" />
              <p>Next</p>
            </div>
          </Link>
        )}
      </div>
    </Suspense>
  );
};

export default PaginationButtons;
