import { useState } from "react";
import { addTodo } from "../Requests";
import styles from "./addItem.module.css";

//Material-UI
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

export const AddItem = ({ updateDetector, userId }) => {
  const [item, setItem] = useState("");
  const [check, setCheck] = useState(true);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (item !== "") {
      await addTodo(item, check, userId);
      updateDetector();
      setItem("");
    }
  };

  const handleInput = (event) => {
    setItem(event.target.value);
    setCheck(false);
  };

  return (
    <form onSubmit={handleAdd} id="form" className={`${styles.form}`}>
      <TextField
        label="What should be done?"
        variant="outlined"
        value={item}
        onChange={handleInput}
      />
      <Button
        type="submit"
        onClick={handleAdd}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </form>
  );
};
