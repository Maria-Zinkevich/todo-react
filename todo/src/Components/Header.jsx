import { Button } from "@material-ui/core";
import styles from "./header.module.css";
import { memo } from "react";

export const Header = memo(({ user, setUser }) => {
  const handleLogout = () => setUser(null);
  return (
    <div className={`${styles.headerWrap}`}>
      <p>{user}</p>
      <Button onClick={handleLogout} variant="contained" color="primary">
        Logout
      </Button>
    </div>
  );
});
