import React from "react";

function Input({ label, name, placeholder }) {
  return (
    <div className="w-full m-auto">
      <div className="flex justify-start items-start flex-col w-5/6 m-auto gap-2">
        <label htmlFor={name} className="text-left font-medium text-sm">
          {label}
        </label>
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          className="border-slate-400 rounded-md border px-3 text-sm py-2 font-normal focus:outline-none w-full"
        />
      </div>
    </div>
  );
}

export default Input;
