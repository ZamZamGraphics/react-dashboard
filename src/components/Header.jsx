import { HiBars3 } from "react-icons/hi2";
import TextField from "./TextField";

function Header() {
  return (
    <div className="ml-0 md:ml-[15rem] bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center flex-shrink-0 space-x-5">
          <div>
            <button className="flex items-center p-1 text-3xl hover:bg-gray-100 rounded-md">
              <span>
                <HiBars3 />
              </span>
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <TextField
              type="text"
              label="Search"
              defaultValue="Search Anything ..."
            />
          </div>
          <div>Add New</div>
        </div>
        <div className="flex items-center ms-auto">
          <div>Notification</div>
          <div>Massage</div>
          <div>User Profile</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
