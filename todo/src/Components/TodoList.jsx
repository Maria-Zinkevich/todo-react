import { ListItem } from "./TodoItem";
import styles from "./todoList.module.css";

export const TodoList = ({ list, onUpdate }) => {
  if (!list) return null;
  return (
    <ul className={`${styles.list}`}>
      {list.map((listItem) => (
        <ListItem key={listItem.id} listItem={listItem} onUpdate={onUpdate} />
      ))}
    </ul>
  );
};
