import { useState } from "react";
import { updateTodo } from "../Requests";
import { deleteTodo } from "../Requests";

//Material-UI
import styles from "./todoItem.module.css";
import Button from "@material-ui/core/Button";
import { Checkbox } from "@material-ui/core";
import { TextField } from "@material-ui/core";

export const ListItem = ({ listItem: { todo, isChecked, id }, onUpdate }) => {
  const [item, setItem] = useState(todo);
  const [check, setCheck] = useState(isChecked);

  const handleEdit = async (check) => {
    await updateTodo(id, item, check);
    onUpdate();
  };

  const handleDell = async () => {
    await deleteTodo(id);
    onUpdate();
  };

  return (
    <li className={`${styles.list_item}`}>
      <TextField
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <Checkbox
        checked={check}
        color="primary"
        inputProps={{ "aria-label": "Checkbox A" }}
        onChange={({ target: { checked } }) => {
          setCheck(checked);
          handleEdit(checked);
        }}
      />
      <Button
        className={`${styles.btn_update}`}
        onClick={handleEdit}
        variant="contained"
        color="secondary"
      >
        Save changes
      </Button>
      <Button onClick={handleDell} variant="contained" color="primary">
        Dellete
      </Button>
    </li>
  );
};
