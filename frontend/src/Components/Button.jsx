import React from "react";

function Button({ children, size }) {
  return (
    <button
      type="button"
      className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-nowrap 
        ${size == "lg" ? "text-sm  px-5 py-2 w-5/6" : "text-[10px] px-2 py-2"}`}
    >
      {children}
    </button>
  );
}

export default Button;
