import { UserState } from "../global/types";

export const AddUserForm: React.FC<UserState> = ({ users, setUsers }) => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const user = {
      firstname: formElement.firstname.value,
      password: formElement.pw.value,
    };
    console.log(users);
    setUsers([...users, user]);
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input type="text" name="firstname" />
      <input type="text" name="pw" />
      <button type="submit">Add</button>
    </form>
  );
};
