import DesktopNav from "./components/DesktopNav";
import SearchBarMobile from "./components/SearchBarMobile";
import NearbyItems from "./components/NearbyItems";
import Products from "./components/Products";
import { useState } from "react";
import MobileNav from "./components/MobileNav";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main
      className="bg-gray-100
     text-gray-900  min-h-screen  flex flex-col  px-12 lg:px-24 overflow-x-hidden"
    >
      <DesktopNav searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="flex flex-col items-center pt-10">
        <SearchBarMobile searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>

      <NearbyItems />
      <Products searchTerm={searchTerm} />
      <MobileNav />
    </main>
  );
};

export default App;
