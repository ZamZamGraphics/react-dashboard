function Button({ children, color, size, loading, sx, ...props }) {
  let buttonColor;
  if (color === "primary") {
    buttonColor = "bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-600";
  } else if (color === "success") {
    buttonColor = "bg-green-600 hover:bg-green-700 dark:focus:ring-green-600";
  } else if (color === "warning") {
    buttonColor =
      "bg-yellow-500 hover:bg-yellow-600 dark:focus:ring-yellow-600";
  } else if (color === "danger") {
    buttonColor = "bg-red-500 hover:bg-red-600 dark:focus:ring-red-600";
  } else {
    buttonColor = "bg-gray-500 hover:bg-gray-600 dark:focus:ring-gray-600";
  }

  let buttonSize;
  if (size === "small") {
    buttonSize = "text-sm";
  } else if (size === "large") {
    buttonSize = "text-lg";
  } else {
    buttonSize = "text-base";
  }

  return (
    <button
      {...props}
      className={`flex justify-center items-center py-2 px-4 ${buttonSize} font-semibold rounded-lg border border-transparent text-white ${buttonColor} disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 ${sx}`}
    >
      {children}
      {loading && (
        <span
          className="animate-spin ml-3 inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </span>
      )}
    </button>
  );
}

export default Button;
