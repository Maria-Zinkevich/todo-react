import { useEffect, useState } from "react";
import { AddItem } from "./Components/AddItem";
import { TodoList } from "./Components/TodoList";
import { getTodos } from "./Requests";

export const ToDo = () => {
  const [list, setList] = useState([]);
  const [detector, setDetector] = useState({});

  useEffect(() => {
    const updateList = async () => {
      const todos = await getTodos();
      setList(todos);
    };

    updateList();
  }, [detector]);

  const updateDetector = () => {
    setDetector({});
  };

  return (
    <>
      <AddItem updateDetector={updateDetector} />
      <TodoList list={list} onUpdate={updateDetector} />
    </>
  );
};
