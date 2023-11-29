import { AiOutlineQuestionCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="h-20 flex justify-center">
      <div className="w-full max-w-6xl flex items-center justify-between ">
        <span className="font-bold text-2xl">booking.com</span>
        <div className="flex">
          <div className="font-bold flex items-center">
            <span className="mr-2 cursor-pointer p-2 rounded hover:bg-blue-900">
              <button>BDT</button>
            </span>
            <span className="mr-2 cursor-pointer p-2 rounded hover:bg-blue-900">
              Language
            </span>
            <span className="mr-2 cursor-pointer p-2 text-2xl rounded hover:bg-blue-900">
              <AiOutlineQuestionCircle/>
            </span>
            <span className="mr-2 cursor-pointer p-2 rounded hover:bg-blue-900">
              List Your Property
            </span>
          </div>
          <button className="border-2 rounded px-2 py-1 mr-1 -mt-2 cursor-pointer font-medium bg-white text-blue-700">
            Register
          </button>
          <button className="border-2 rounded px-2 py-1 ml-1 -mt-2 cursor-pointer font-medium bg-white text-blue-700">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
