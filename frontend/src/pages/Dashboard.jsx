import React, { useEffect, useState } from "react";
import AppBar from "../Components/AppBar";
import Button from "../Components/Button";
import BalanceCard from "../Components/BalanceCard";
import Search from "../Components/Search";
import UserList from "../Components/UserList";
import { getBulkUsers } from "../services/userService";
import { useDebounce } from "../utility/hooks";
import SendMoney from "./SendMoney";

function Dashboard() {
  const [bulkUsers, setBulkUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [showTransfer, setShowTransfer] = useState(true);
  const [transferToUser, setTransferToUser] = useState(null);

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

  const handleTransfer = () => {};

  const handleTransferClose = () => {
    setShowTransfer(false);
  };

  return (
    <div className="">
      <AppBar />
      <div className="container mx-auto xl:w-5/6 p-4">
        <BalanceCard balance={"10000.00"} />
        <div className="mt-5">
          <p>Contacts</p>
        </div>
        <hr />
        <Search onChange={handleSearch} />
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
        {showTransfer && (
          <div className="absolute top-0 left-0 backdrop-blur-sm">
            <SendMoney
              user={transferToUser}
              onCancel={handleTransferClose}
              onSubmit={handleTransfer}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
