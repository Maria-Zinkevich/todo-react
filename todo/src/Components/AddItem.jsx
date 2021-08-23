import { useState } from "react";
import { addTodo } from "../Requests";
import styles from "./addItem.module.css";

//Material-UI
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

let textInput = createRef();

function initState({ userId }) {
    return {
      item: "",
      userId,
      check: false,
    };
}

async function reducer(state, action) {
    if (action.item !== "") {
      await addTodo(action.item, state.check, state.userId);
      action.updateDetector();
      action.setItem(action.item);
    }
  }

export const AddItem = ({ updateDetector, userId }) => {
  const [item, setItem] = useState("");
  const [check, setCheck] = useState(false);
  const [state, dispatch] = useReducer(reducer, { userId }, initState);

  return (
    <form onSubmit={() => dispatch({ item, updateDetector, setItem })} id="form" className={`${styles.form}`}>
      <TextField
        ref={textInput}
        label="What should be done?"
        variant="outlined"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <Button
        type="submit"
        onClick={() => dispatch({ item, updateDetector, setItem })}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </form>
  );
};
