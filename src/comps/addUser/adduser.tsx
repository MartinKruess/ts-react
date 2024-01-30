import { useState } from "react";
import { AddUserForm } from "./addUserForm";
import { Users } from "../global/types";

export const AddUser = () => {
  // Variante mit
  //const [users, setUsers] = useState<Users>([]);

  // Variante mit Interface
  const [users, setUsers] = useState<Users[]>([]);

  return (
    <>
      <h1>Add User</h1>
      <AddUserForm users={users} setUsers={setUsers} />
    </>
  );
};
