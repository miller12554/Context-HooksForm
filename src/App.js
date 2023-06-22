import React, { useContext } from "react";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import { UsersContextProvider, UsersContext } from "./context";
import AddUser from "./AddUser";

const App = () => {
  const users = [{ id: 1, name: "Jhon" }, { id: 2, name: "Joanna" }];
  // const { selectedUser, setSelectedUser } = useContext(UsersContext);
  return (
    <div className="app">
      <UsersContextProvider users={users}>
        <h2>Using context and hooks</h2>
        <p>
          'UsersList', 'UserDetails' and 'AddUser' are three different
          components which use the same shared state through a context called
          "UsersContext"
        </p>
        <div className="users-container">
          <UserList />
          <UserDetails />
        </div>
        <AddUser />
      </UsersContextProvider>
    </div>
  );
};

export default App;
