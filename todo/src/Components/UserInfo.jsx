import { Header } from "./Header";
import { AddItem } from "./AddItem";
import { TodoList } from "./TodoList";

export const UserInfo = ({ user, setUser, updateDetector, userId, list }) => {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <AddItem updateDetector={updateDetector} userId={userId} />
      <TodoList list={list} onUpdate={updateDetector} />
    </>
  );
};
