import { Header } from "./Header";
import { AddItem } from "./AddItem";
import { TodoList } from "./TodoList";
import { Filter } from "./Filter";

export const UserInfo = ({
  user,
  setUser,
  updateDetector,
  userId,
  list,
  setFilter,
}) => {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <AddItem updateDetector={updateDetector} userId={userId} />
      <Filter setFilter={setFilter} onUpdate={updateDetector} />
      <TodoList
        list={list}
        onUpdate={updateDetector}
        updateDetector={updateDetector}
      />
    </>
  );
};
