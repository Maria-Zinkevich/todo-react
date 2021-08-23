import { useEffect, useState } from "react";
import { getTodosByUser, getTodosByStatus } from "./Requests";
import { Login } from "./Components/Login";
import { UserInfo } from "./Components/UserInfo";

export const ToDo = () => {
  const [list, setList] = useState([]);
  const [detector, setDetector] = useState({});
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const updateList = async () => {
      let todos;
      if (null === filter || filter === "null") {
        todos = user && (await getTodosByUser(userId));
        setList(todos);
      } else {
        todos = user && (await getTodosByStatus(filter, userId));
        setList(todos);
      }
    };

    updateList();
  }, [detector, user, userId, filter]);

  const updateDetector = () => {
    setDetector({});
  };

  return user === null ? (
    <Login setUser={setUser} setUserId={setUserId} />
  ) : (
    <UserInfo
      user={user}
      setUser={setUser}
      updateDetector={updateDetector}
      userId={userId}
      list={list}
      onUpdate={updateDetector}
      setFilter={setFilter}
    />
  );
};
