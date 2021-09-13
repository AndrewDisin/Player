import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      completed: true,
      title: 'Купить хлеб',
    },
    {
      id: 2,
      completed: false,
      title: 'Купить масло',
    },
    {
      id: 3,
      completed: false,
      title: 'Купить молоко',
    },
  ]);

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

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper todo">
        <h1>React Todo</h1>
        <TodoList todos={todos} onToggle={togleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
