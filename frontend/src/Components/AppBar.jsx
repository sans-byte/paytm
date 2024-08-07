import React from "react";
import Button from "./Button";

function AppBar({ user }) {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex text-slate-50 gap-2 justify-center items-center">
            <div className="font-mono"> Paytm </div>
            <img
              src="/paytm.jpg"
              className="h-8 rounded-full "
              alt="Flowbite Logo"
            />
          </div>
          <div className="flex justify-center items-center gap-3">
            <Button> Log out </Button>
            <div className="h-8 w-8 bg-slate-400 rounded-full flex justify-center items-center">
              <p className="text-bold text-xl font-mono">{"s".toUpperCase()}</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AppBar;
