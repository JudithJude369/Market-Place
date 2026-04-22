import DesktopNav from "./components/DesktopNav";
import SearchBarMobile from "./components/SearchBarMobile";
import NearbyItems from "./components/NearbyItems";
import Products from "./components/Products";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = "https://fake-store-api.mock.beeceptor.com/api/products";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchTerm(event.target.value);
  };

  const response = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get<Product[]>(url);
      return res.data;
    },
  });

  console.log(response.data);

  return (
    <main
      className="bg-gray-100
     text-gray-900  min-h-screen  flex flex-col  px-12 lg:px-24 overflow-x-hidden"
    >
      <DesktopNav searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="flex flex-col items-center pt-10">
        <SearchBarMobile searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      <div className=" ">
        <NearbyItems />
        <Products />
      </div>
    </main>
  );
};

export default App;
