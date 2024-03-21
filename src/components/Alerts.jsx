function Alerts({ children, variant, color, classes, ...props }) {
  let bgColor;
  if (color === "primary") {
    if (variant === "soft") {
      bgColor = "bg-blue-100 border border-blue-200 text-blue-800";
    } else {
      bgColor = "bg-blue-600 text-white";
    }
  } else if (color === "success") {
    if (variant === "soft") {
      bgColor = "bg-green-100 border border-green-200 text-green-800";
    } else {
      bgColor = "bg-green-600 text-white";
    }
  } else if (color === "warning") {
    if (variant === "soft") {
      bgColor = "bg-yellow-100 border border-yellow-200 text-yellow-800";
    } else {
      bgColor = "bg-yellow-500 text-white";
    }
  } else if (color === "danger") {
    if (variant === "soft") {
      bgColor = "bg-red-100 border border-red-200 text-red-800";
    } else {
      bgColor = "bg-red-500 text-white";
    }
  } else {
    if (variant === "soft") {
      bgColor = "bg-gray-100 border border-gray-200 text-gray-800";
    } else {
      bgColor = "bg-gray-500 text-white";
    }
  }

  return (
    <div
      {...props}
      className={`${bgColor} text-sm rounded-lg p-4 ${classes}`}
      role="alert"
    >
      {children}
    </div>
  );
}

export default Alerts;
