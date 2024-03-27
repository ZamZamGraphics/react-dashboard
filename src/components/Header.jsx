import { HiBars3 } from "react-icons/hi2";

function Header() {
  return (
    <div className="ml-0 md:ml-[15rem] bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center flex-shrink-0">
          <div>
            <button className="flex items-center">
              <span>
                <HiBars3 />
              </span>
            </button>
          </div>
          <div>Search Input box</div>
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
