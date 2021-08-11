import { useState } from "react";
import { addTodo } from "../Requests";
import styles from "./addItem.module.css";

//Material-UI
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { FormControl } from "@material-ui/core";

export const AddItem = ({ updateDetector }) => {
  const [item, setItem] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    if (item !== "") {
      await addTodo(item);
      updateDetector();
      setItem("");
    }
  };

  const handleInput = (event) => {
    setItem(event.target.value);
  };

  return (
    <form onSubmit={handleAdd} id="form" className={`${styles.form}`}>
      <FormControl>
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
      </FormControl>
    </form>
  );
};
