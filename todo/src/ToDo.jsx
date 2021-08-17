import { useEffect, useState } from "react";
import { getTodosByUser } from "./Requests";
import { Login } from "./Components/Login";
import { UserInfo } from "./Components/UserInfo";

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
    />
  );
};
