import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const DesktopNav = () => {
  return (
    <main className="px-16 py-4 flex items-center justify-between shadow-xl bg-gray-100 max-w-8xl mx-auto">
      <Logo />
      <section className=" w-full max-w-2xl relative">
        <input
          type="text"
          className="bg-gray-200 shadow rounded-sm w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer
          "
          placeholder="Search products, brands and more"
        />
        <IoIosSearch
          className="text-xl absolute top-1/2 transform -translate-y-1/2 right-3
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
