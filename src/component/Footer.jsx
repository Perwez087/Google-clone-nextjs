import CountryLookup from "./CountryLookup";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-3 gap-y-7 sm:gap-y-0">
         <ul className="flex items-center gap-x-6">
            <li className="link">About</li>
            <li className="link">Advertising</li>
            <li className="link">Business</li>
            <li className="link">How Search Works</li>
         </ul>

         <ul className="flex items-center gap-x-6">
            <li className="link">Privacy</li>
            <li className="link">Terms</li>
            <li className="link">Settings</li>
         </ul>
      </div>
    </footer>
  );
};

export default Footer;
