import { HiBars3 } from "react-icons/hi2";

function Header() {
  return (
    <div className="bg-white border-b border-gray-200 sticky left-0 right-0 w-full z-50">
      <div className="flex items-center justify-between p-3">
        <div className="flex-shrink-0">
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
        <div className="ms-auto">
          <div>Notification</div>
          <div>Massage</div>
          <div>User Profile</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
