import React, { useContext } from "react";
import clsx from "clsx";

import { UsersContext } from "./context";

const UsersList = () => {
  const usersContext = useContext(UsersContext);
  console.log(usersContext);
  const { users, selectedUser, setSelectedUser } = useContext(UsersContext);

  return (
    <div>
      <h4>Users: </h4>
      {users.map(user => {
        // compose class name
        const userItemClassNames = clsx("user-item", {
          "user-item-selected": user.id === selectedUser.id,
        });

        return (
          <div
            className={userItemClassNames}
            key={user.id}
            onClick={() => setSelectedUser(user)}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
