import { IoIosSearch } from "react-icons/io";

interface SearchBarMobileProps {
  searchTerm: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchBarMobile = ({
  searchTerm,
  handleSearch,
}: SearchBarMobileProps) => {
  return (
    <section className=" w-full max-w-2xl  relative  lg:hidden py-4 ">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="bg-gray-200 shadow rounded-sm w-full pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer
         "
        placeholder="Search products, brands and more"
      />
      <IoIosSearch
        className="text-xl absolute top-1/2 transform -translate-y-1/2 left-3
          "
      />
    </section>
  );
};

export default SearchBarMobile;
