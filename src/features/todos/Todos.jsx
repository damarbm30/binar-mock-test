import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchTodos, toggleTodo } from "./todosSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const userId = useSelector((state) => state.auth.auth.username);

  useEffect(() => {
    dispatch(fetchTodos(userId));
  }, [dispatch]);

  const onChangeToggle = (id) => {
    dispatch(toggleTodo({ id }));
  };

  return todos.length > 0 ? (
    <table className="table w-75 mx-auto">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return (
            <tr key={todo.id}>
              <th scope="row">{todo.id}</th>
              <td className="w-50">{todo.title}</td>
              <td>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    onChangeToggle(todo.id);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <p className="mt-3">There is no task for this user</p>
  );
};
export default Todos;
