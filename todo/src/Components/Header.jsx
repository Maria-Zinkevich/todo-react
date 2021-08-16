// const { useState } = require("react");
import { Button } from "@material-ui/core";
import styles from "./header.module.css";

export const Header = ({ user }) => {
  const handleLogout = () => {
    window.location.reload();
  };
  return (
    <div className={`${styles.headerWrap}`}>
      <p>{user}</p>
      <Button onClick={handleLogout} variant="contained" color="primary">
        Logout
      </Button>
    </div>
  );
};
