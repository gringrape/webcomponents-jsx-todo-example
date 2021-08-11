export function addTodo(state, todo) {
  const { todos } = state;

  return {
    ...state,
    todos: [...todos, todo],
  };
}

export function deleteTodo(state, index) {
  const { todos } = state;
  return ({
    ...state,
    todos: [
      ...todos.slice(0, index),
      ...todos.slice(index + 1),
    ],
  });
}
