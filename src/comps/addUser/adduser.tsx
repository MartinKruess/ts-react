import { useState } from "react";
import { AddUserForm } from "./addUserForm";
import { Users } from "../global/types";

export const AddUser = () => {
  const [users, setUsers] = useState<Users>([]);
  return (
    <>
      <h1>Add User</h1>
      <AddUserForm users={users} setUsers={setUsers} />
    </>
  );
};
