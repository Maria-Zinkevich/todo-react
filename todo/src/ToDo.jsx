import { useEffect, useState } from "react";
import { AddItem } from "./Components/AddItem";
import { TodoList } from "./Components/TodoList";
import { Login } from "./Components/Login";
import { Header } from "./Components/Header";
import { getTodosByUser } from "./Requests";

export const ToDo = () => {
  const [list, setList] = useState([]);
  const [detector, setDetector] = useState({});
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const updateList = async () => {
      const todos = user && (await getTodosByUser(userId));
      setList(todos);
    };

    updateList();
  }, [detector, user, userId]);

  const updateDetector = () => {
    setDetector({});
  };

  return (
    <>
      {user === null ? (
        <Login setUser={setUser} setUserId={setUserId} />
      ) : (
        <>
          <Header user={user} />
          <AddItem updateDetector={updateDetector} userId={userId} />
          <TodoList list={list} onUpdate={updateDetector} />
        </>
      )}
    </>
  );
};
