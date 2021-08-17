import { getUsersList, addUser } from "../Requests";
import { useState } from "react";
import styles from "./login.module.css";

//Material-UI
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

export const Login = ({ setUser, setUserId }) => {
  const [login, setLogin] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLogin(e.target.value);
    setLogin("");

    let user;
    const usersList = await getUsersList(login);

    if (usersList.length === 0) {
      user = await addUser(login);
    } else {
      user = usersList[0];
    }

    setUser(user.user);
    setUserId(user.id);
  };

  return (
    <form onSubmit={handleLogin} className={`${styles.formLogin}`}>
      <TextField
        type="text"
        value={login}
        onChange={(e) => {
          setLogin(e.target.value);
        }}
      />
      <Button
        type="submit"
        form="formLogin"
        onClick={handleLogin}
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    </form>
  );
};
