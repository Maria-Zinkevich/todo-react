import { useState } from "react";
import { updateTodo } from "../Requests";
import { deleteTodo } from "../Requests";

export const ListItem = ({ listItem: { todo, id }, onUpdate }) => {
  const [item, setItem] = useState(todo);
  const [showItem, setShowItem] = useState(true);

  const handleEdit = async () => {
    await updateTodo(id, item);
    onUpdate();
  };

  const handleDell = async () => {
    await deleteTodo(id, item);
    setShowItem(false);
  };

  if (showItem) {
    return (
      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button onClick={handleDell}>Dell</button>
        <button onClick={handleEdit}>Update</button>
      </div>
    );
  }
  return "";
};
