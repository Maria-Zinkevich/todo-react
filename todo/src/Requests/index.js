const URL = "http://localhost:3033/list";
const USERS = "http://localhost:3033/users";

export const addTodo = async (todo, isChecked, userId) =>
  await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todo, isChecked, userId }),
  });

export const updateTodo = async (id, todo, isChecked) => {
  await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todo, isChecked }),
  });
};

export const getTodos = async () => {
  const response = await fetch(URL);
  return await response.json();
};

export const deleteTodo = async (id) => {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
};

export const addUser = async (user) => {
  const response = await fetch(USERS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user }),
  });
  return await response.json();
};

export const getUsersList = async (user) => {
  const response = await fetch(`${USERS}/?user=${user}`);
  return await response.json();
};

export const getTodosByUser = async (userId) => {
  const response = await fetch(`${URL}/?userId=${userId}`);
  return await response.json();
};
