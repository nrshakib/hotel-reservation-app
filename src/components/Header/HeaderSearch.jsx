import { IoBedOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

const HeaderSearch = () => {
  return (
    <div className="w-3/4 flex ml-48 -mt-8 h-20 bg-white rounded border-4 border-yellow-400">
      <div className="w-full flex">
        <div className="flex w-96 border-2 border-yellow-400 rounded px-5 items-center">
          <IoBedOutline className="mt-2 ml-2 text-black text-3xl mr-2" />
          <input
            type="text"
            placeholder="Where are you going?"
            className=" outline-none"
          />
        </div>
        <div className="flex w-60 border-2 border-yellow-400 rounded items-center cursor-pointer">
          <MdOutlineCalendarMonth className="mt-2 ml-2 text-black text-3xl mr-2" />
          <span className="mt-1">date</span>
        </div>
        <div className="flex w-96 border-2 border-yellow-400 rounded items-center">
          <IoPersonOutline className="mt-2 ml-2 text-black text-3xl mr-2" />
          <span className="outline-none text-xl ml-2">2 adults</span>
        </div>
        <button
          type="submit"
          className="bg-blue-700 p-2 w-36 text-white text-2xl rounded border-2 border-yellow-400"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
