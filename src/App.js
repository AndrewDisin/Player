import React, { useEffect } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import Loader from './Loader';

const AddTodo = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(import('./Todo/AddTodo'));
      }, 5000)
    )
);

function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  function togleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    let res = todos.filter((todo) => todo.id !== id);
    setTodos(res);
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          id: todos.length + 1,
          title: title,
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper todo">
        <h2>Create Todo</h2>
        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        {loading ? (
          <Loader />
        ) : (
          <>
            <h2>Todo List</h2>
            <TodoList todos={todos} onToggle={togleTodo} />
          </>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
