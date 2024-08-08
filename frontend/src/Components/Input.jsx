import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ label, name, placeholder, type, onChange }, ref) => {
    return (
      <div className="w-full m-auto">
        <div className="flex justify-start items-start flex-col w-5/6 m-auto gap-2">
          <label htmlFor={name} className="text-left font-medium text-sm">
            {label}
          </label>
          <input
            type={type ? type : "text"}
            name={name}
            id={name}
            placeholder={placeholder}
            ref={ref}
            onChange={(e) => {
              e.preventDefault();
              onChange && onChange(e.target.value);
            }}
            className="border-slate-400 rounded-md border px-3 text-sm py-2 font-normal focus:outline-none w-full"
          />
        </div>
      </div>
    );
  }
);

export default Input;
