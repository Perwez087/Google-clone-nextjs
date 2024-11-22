
import "./../globals.css";
import SearchHeader from "@/component/SearchHeader";

export default function SearchLayout({ children }) {
  return (
    <div>
        <SearchHeader/>
        {children}
    </div>
  );
}
