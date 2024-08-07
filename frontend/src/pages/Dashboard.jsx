import React from "react";
import AppBar from "../Components/AppBar";
import Button from "../Components/Button";
import BalanceCard from "../Components/BalanceCard";
import Search from "../Components/Search";

function Dashboard() {
  return (
    <div className="">
      <AppBar />
      <div className="container mx-auto xl:w-5/6 p-4">
        <BalanceCard balance={"10000.00"} />
        <div className="mt-5">
          <p>Contancts</p>
        </div>
        <hr />
        <Search />
      </div>
    </div>
  );
}

export default Dashboard;
