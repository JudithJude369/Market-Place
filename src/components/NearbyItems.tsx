import { MdOutlineChair } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaCarSide } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

const NearbyItems = () => {
  return (
    <section className="flex flex-col gap-4 lg:pt-20 items-start ">
      <h2 className="text-[1.5rem] font-bold">Nearby Items</h2>

      <article className="flex gap-2 lg:gap-8 ">
        <div className="flex items-center flex-col gap-1">
          <div className="p-2 lg:p-3 shadow rounded-4xl bg-gray-300">
            <MdOutlineChair className="text-lg lg:text-4xl" />
          </div>
          <p className="text-xs lg:text-sm">Furniture</p>
        </div>

        <div className="flex items-center flex-col gap-1">
          <div className="p-2 lg:p-3 shadow rounded-4xl bg-gray-300">
            <MdOutlinePhoneIphone className="text-lg lg:text-4xl" />
          </div>
          <p className="text-xs lg:text-sm">Electronics</p>
        </div>

        <div className="flex items-center flex-col gap-1">
          <div className="p-2 lg:p-3 shadow rounded-4xl bg-gray-300">
            <FaCarSide className="text-lg lg:text-4xl" />
          </div>
          <p className="text-xs lg:text-sm">Cars</p>
        </div>

        <div className="flex items-center flex-col gap-1">
          <div className="p-2 lg:p-3 shadow rounded-4xl bg-gray-300">
            <IoHome className="text-lg lg:text-4xl" />
          </div>
          <p className="text-xs lg:text-sm">Home</p>
        </div>
      </article>
    </section>
  );
};
export default NearbyItems;
