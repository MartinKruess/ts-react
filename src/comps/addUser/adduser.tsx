import { useState } from "react";
import { AddUserForm } from "./addUserForm";
// Variante mit Alias
//import { Users } from "../global/types";

// Variante mit Interface
import { User } from "../global/types";

export const AddUser = () => {
  // Variante mit Alias
  // const [users, setUsers] = useState<Users>([]);

  // Variante mit Interface
  const [users, setUsers] = useState<User[]>([]);
  return (
    <>
      <h1>Add User</h1>
      <AddUserForm users={users} setUsers={setUsers} />
    </>
  );
};
