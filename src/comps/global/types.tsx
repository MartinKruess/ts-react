// export type User = {
//   firstname: string;
//   password: string;
// };

// export type Users = User[];

// export type UserState = {
//   users: Users;
//   setUsers: React.Dispatch<React.SetStateAction<Users>>;
// };

export interface User {
  firstname: string;
  password: string;
}

export interface UserState {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}
