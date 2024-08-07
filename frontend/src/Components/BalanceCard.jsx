import React from "react";
import Button from "./Button";

function BalanceCard({ balance }) {
  return (
    <div className="w-fit h-24 bg-slate-200 p-4 flex justify-between items-center rounded-md flex-col font-mono">
      <p className="text-md font-medium"> Your Balance : ₹{balance}</p>
      <div className="self-end">
        <Button>Add Money</Button>
      </div>
    </div>
  );
}

export default BalanceCard;
