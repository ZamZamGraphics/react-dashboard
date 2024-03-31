import { BsEnvelope } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { HiBars3, HiOutlineBellAlert } from "react-icons/hi2";

import TextField from "./TextField";

function Header({ onOpen }) {
  return (
    <div className="ml-0 md:ml-[15rem] bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between p-2">
        <div className="flex flex-auto items-center space-x-5">
          <div>
            <button
              onClick={onOpen}
              className="flex items-center p-2 text-2xl hover:bg-gray-100 rounded-full"
            >
              <span>
                <HiBars3 />
              </span>
            </button>
          </div>
          <div className="hidden md:block md:w-96">
            <TextField type="text" defaultValue="Search Anything ..." />
          </div>
          <div>
            <button className="flex items-center p-2 text-2xl hover:bg-gray-100 rounded-full">
              <span>
                <FaPlus />
              </span>
            </button>
          </div>
        </div>
        <div className="flex ms-auto">
          <div>
            <button className="flex items-center p-2 text-2xl hover:bg-gray-100 rounded-full">
              <span>
                <HiOutlineBellAlert />
              </span>
            </button>
          </div>
          <div>
            <button className="flex items-center p-2 text-2xl hover:bg-gray-100 rounded-full">
              <span>
                <BsEnvelope />
              </span>
            </button>
          </div>
          <div>
            <button className="flex items-center p-2 text-2xl hover:bg-gray-100 rounded-full">
              <span>
                <FaRegUserCircle />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
