import React, { useState } from "react";

function Button({ children, size, onClick, buttonLoader }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-nowrap 
        ${size == "lg" ? "text-sm  px-5 py-2 w-5/6" : "text-[10px] px-2 py-2"}`}
    >
      {buttonLoader ? (
        <div className="text-sm">
          <svg
            width="14"
            height="14"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff"
          >
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
          </svg>
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
