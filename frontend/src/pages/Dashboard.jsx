import React, { useEffect, useState } from "react";
import AppBar from "../Components/AppBar";
import Button from "../Components/Button";
import BalanceCard from "../Components/BalanceCard";
import Search from "../Components/Search";
import UserList from "../Components/UserList";
import {
  getBulkUsers,
  getBalance,
  transferMoney,
} from "../services/userService";
import { useDebounce } from "../utility/hooks";
import SendMoney from "./SendMoney";

function Dashboard() {
  const [bulkUsers, setBulkUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [showTransfer, setShowTransfer] = useState(true);
  const [transferToUser, setTransferToUser] = useState(null);
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [buttonLoader, setButtonLoader] = useState(false);

  console.log(transferToUser);

  useEffect(() => {
    const getBalnce = async () => {
      try {
        const response = await getBalance();
        if (response && response.status === 200) {
          setBalance(response.data);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getBalnce();
  }, []);

  useEffect(() => {
    const getSearchedUsers = async () => {
      try {
        setLoading(true);
        const response = await getBulkUsers(debouncedSearch);
        if (response && response.status === 200) {
          setBulkUsers(response.data.users);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getSearchedUsers();
  }, [debouncedSearch]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleTransferModelShow = () => {
    setShowTransfer(true);
  };

  const handleTransfer = async () => {
    if (amount <= 0) {
      alert("Invalid amount");
      return;
    }

    if (amount > balance) {
      alert("Insufficient balance");
      return;
    }

    const payload = {
      to: transferToUser.id,
      amount: Number(amount),
    };

    try {
      setButtonLoader(true);
      const response = await transferMoney(payload);
      if (response && response.status === 200) {
        setBalance((lastAmount) => lastAmount - amount);
        setShowTransfer(false);
        setTransferToUser(null);
      }
      alert(response.data);
      return;
    } catch (error) {
      console.log(error.data);
    } finally {
      setButtonLoader(false);
    }
  };

  const handleTransferClose = () => {
    setShowTransfer(false);
  };

  return (
    <div className="">
      <AppBar />
      <div className="container mx-auto xl:w-5/6 p-4">
        <BalanceCard balance={balance.toFixed(2)} />
        <div className="mt-5">
          <p>Contacts</p>
        </div>
        <hr />
        <div className="flex justify-start">
          <Search onChange={handleSearch} />
        </div>
        <div className="h-10"></div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <UserList
            users={bulkUsers}
            model={handleTransferModelShow}
            toUser={setTransferToUser}
          />
        )}
        {showTransfer && transferToUser && (
          <div className="absolute top-0 left-0 backdrop-blur-sm">
            <SendMoney
              user={transferToUser}
              onCancel={handleTransferClose}
              onSubmit={handleTransfer}
              amount={amount}
              setAmount={setAmount}
              buttonLoader={buttonLoader}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
