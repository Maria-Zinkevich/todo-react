const URL = "http://localhost:3033/list";

export const addTodo = async (todo) =>
  await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todo }),
  });

export const updateTodo = async (id, todo) => {
  await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todo }),
  });
};

export const getTodos = async () => {
  const response = await fetch(URL);
  return await response.json();
};

export const deleteTodo = async (id, todo) => {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todo }),
  });
};
