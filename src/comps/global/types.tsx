// type User = {
//   firstname: string;
//   password: string;
// };

// export type Users = User[];

// export type UserState = {
//   users: Users;
//   setUsers: React.Dispatch<React.SetStateAction<Users>>;
// };

interface User {
  firstname: string;
  password: string;
}

export interface Users {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}
