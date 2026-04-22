import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

interface DesktopNavProps {
  searchTerm: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
}

const DesktopNav = ({ searchTerm, handleSearch }: DesktopNavProps) => {
  return (
    <main className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 py-4 lg:px-4 xl:px-16 items-center justify-between shadow-xl bg-gray-100  max-w-8xl hidden lg:flex">
      <Logo />
      <section className=" w-full max-w-2xl relative">
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

      {/* other nav details */}

      <p className="hover:text-orange-400 cursor-pointer">Messages</p>
      <p className="hover:text-orange-400 cursor-pointer">Post an Ad</p>
      <section className="flex items-center gap-2 hover:text-orange-400 cursor-pointer">
        <CgProfile className="text-xl " />
        <p>Profile</p>
      </section>
    </main>
  );
};

export default DesktopNav;
