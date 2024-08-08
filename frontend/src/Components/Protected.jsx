import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLoading from "./PageLoading";

function Protected({ children, reverse }) {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      SetIsLoggedIn(true);
      if (reverse) {
        navigate("/dashboard");
      }
    } else {
      SetIsLoggedIn(false);
      navigate("/");
    }
    setLoading(false);
  }, [reverse]);
  if (loading) return <PageLoading />;
  return <>{reverse ? !isLoggedIn && children : isLoggedIn && children}</>;
}

export default Protected;
