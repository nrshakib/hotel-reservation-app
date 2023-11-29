import Navbar from "./Navbar";
import { IoBedSharp } from "react-icons/io5";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { IoIosCar } from "react-icons/io";
import { MdAttractions } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <div>
      <div className="h-96 bg-blue-950 text-white ">
        <div className="h-20 justify-center items-center">
          <Navbar />
          <div className="flex items-center ml-48">
            <button className="flex mr-2 border-2 py-2 px-2 rounded-full hover:bg-blue-900">
              <IoBedSharp className="mt-1 mr-1" />
              <p>Stays</p>
            </button>
            <button className="flex mr-2 py-2 px-2 rounded-full hover:bg-blue-900">
              <PiAirplaneTakeoff className="mt-1 mr-1" />
              <p>Flights</p>
            </button>
            <button className="flex mr-2 py-2 px-2 rounded-full hover:bg-blue-900">
              <IoIosCar className="mt-1 mr-1" />
              <p>Car rentals</p>
            </button>
            <button className="flex mr-2 py-2 px-2 rounded-full hover:bg-blue-900">
              <MdAttractions className="mt-1 mr-1" />
              <p>Attractions</p>
            </button>
            <button className="flex mr-2 py-2 px-2 rounded-full hover:bg-blue-900">
              <FaTaxi className="mt-1 mr-1" />
              <p>Airport taxis</p>
            </button>
          </div>
          <div className="ml-48 mt-20 mb-12">
            <p className="text-5xl font-bold">Find your next stay</p>
            <p className="text-2xl font-normal mt-3">
              Search low prices on hotels, homes and much more...
            </p>
          </div>
        </div>
      </div>
      <HeaderSearch />
    </div>
  );
};
export default Header;
