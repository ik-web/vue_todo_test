export const handleTodos = (todos, isClipped) => {
  const totalTodos = todos.length;

  if (isClipped) {
    if (totalTodos > 4) {
      return todos.slice(0, 3);
    }

    return todos.slice(0, 4);
  }

  return todos;
};
