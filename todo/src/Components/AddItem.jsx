import { useState, useReducer } from "react";
import { addTodo } from "../Requests";
import { todos } from "../server/todos";
import styles from "./addItem.module.css";

//Material-UI
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

export const initialState = {
  item: "",
  userId: null,
  check: false,
  id: null,
};

export const reducer = (state, action) => {
  console.log(state, action);
  todos.push({
    todo: action.todo,
    isChecked: state.check,
    userId: action.userId,
    id: action.id,
  });
  console.log(todos);
};

export const AddItem = ({ updateDetector, userId }) => {
  const [item, setItem] = useState("");
  const [check, setCheck] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (e) => {
    e.preventDefault();

    if (item !== "") {
      dispatch({
        todo: item,
        isChecked: check,
        userId: userId,
        id: ++todos[todos.length - 1].id,
      });
    }
    setItem("");
  };

  return (
    <form
      onSubmit={() => dispatch({ item, updateDetector })}
      id="form"
      className={`${styles.form}`}
    >
      <TextField
        label="What should be done?"
        variant="outlined"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <Button
        type="submit"
        onClick={submit}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </form>
  );
};
