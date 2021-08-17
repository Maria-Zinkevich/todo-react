import styles from "./filter.module.css";

export const Filter = ({ setFilter }) => {
  return (
    <>
      <select
        className={`${styles.select}`}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        <option value="null">All</option>
        <option value="true">Сompleted</option>
        <option value="false">Not completed</option>
      </select>
    </>
  );
};
