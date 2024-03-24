import { useState } from "react";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";

function Alerts({ children, variant, color, classes, ...props }) {
  const [close, setClose] = useState(false);
  let bgColor, icon;
  if (color === "primary") {
    icon = <FiAlertCircle />;
    if (variant === "soft") {
      bgColor = "bg-blue-100 border border-blue-200 text-blue-800";
    } else {
      bgColor = "bg-blue-600 text-white";
    }
  } else if (color === "success") {
    icon = <FiCheckCircle />;
    if (variant === "soft") {
      bgColor = "bg-green-100 border border-green-200 text-green-800";
    } else {
      bgColor = "bg-green-600 text-white";
    }
  } else if (color === "warning") {
    icon = <IoWarningOutline />;
    if (variant === "soft") {
      bgColor = "bg-yellow-100 border border-yellow-200 text-yellow-800";
    } else {
      bgColor = "bg-yellow-500 text-white";
    }
  } else if (color === "danger") {
    icon = <FiAlertCircle />;
    if (variant === "soft") {
      bgColor = "bg-red-100 border border-red-200 text-red-800";
    } else {
      bgColor = "bg-red-500 text-white";
    }
  } else {
    icon = <FiAlertCircle />;
    if (variant === "soft") {
      bgColor = "bg-gray-100 border border-gray-200 text-gray-800";
    } else {
      bgColor = "bg-gray-500 text-white";
    }
  }
  return (
    !close && (
      <div
        {...props}
        className={`${bgColor} flex items-center text-sm rounded-lg p-4 ${classes}`}
        role="alert"
      >
        <div className="flex-shrink-0 text-lg">
          <span>{icon}</span>
        </div>
        <div className="ms-3">{children}</div>
        <div className="ps-3 ms-auto text-lg">
          <button onClick={() => setClose(true)} className="flex items-center">
            <span>
              <IoIosCloseCircleOutline />
            </span>
          </button>
        </div>
      </div>
    )
  );
}

export default Alerts;
