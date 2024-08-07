import React from "react";
import { Link } from "react-router-dom";
import Login from "../pages/Login";

function BottomWarning({ children, link, to }) {
  return (
    <div className="flex gap-1">
      <div>{children}</div>
      <Link to={to} className="underline">
        {link}
      </Link>
    </div>
  );
}

export default BottomWarning;
