import { CgProfile } from "react-icons/cg";
import { CiHome } from "react-icons/ci";
import { PiChatTeardropThin } from "react-icons/pi";
import { CiCirclePlus } from "react-icons/ci";
const MobileNav = () => {
  return (
    <main className="fixed bottom-0 left-0 right-0 backdrop-blur-md z-50 py-2 items-center justify-between shadow-xl bg-gray-100  max-w-8xl px-6 flex lg:hidden">
      {/* nav items */}
      <div className="flex flex-col items-center  hover:text-orange-400 cursor-pointer">
        <CiHome className="text-2xl" />
        <p className="hover:text-orange-400 cursor-pointer">Home</p>
      </div>

      <div className="flex flex-col items-center  hover:text-orange-400 cursor-pointer">
        <PiChatTeardropThin className="text-2xl" />
        <p className="hover:text-orange-400 cursor-pointer">Chats</p>
      </div>
      <div className="flex flex-col items-center  hover:text-orange-400 cursor-pointer">
        <CiCirclePlus className="text-2xl " />
        <p>Sell</p>
      </div>
      <div className="flex flex-col items-center  hover:text-orange-400 cursor-pointer">
        <CgProfile className="text-xl " />
        <p>Profile</p>
      </div>
    </main>
  );
};

export default MobileNav;
