type User = {
  firstname: string;
  password: string;
};

export type Users = User[];

export type UserState = {
  users: Users;
  setUsers: React.Dispatch<React.SetStateAction<Users>>;
};

// interface user {
//   firstname: string;
//   password: string;
// };

// export interface usersState {
//   users: User[];
//   setUsers: <React.Dispatch<React.SetStateAction<user[]>>>
// }
