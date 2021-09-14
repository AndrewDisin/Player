import React from 'react';
import TodoList from './Todo/TodoList';
import AddTodo from './Todo/AddTodo';
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
        <AddTodo onCreate={addTodo} />
        <h2>Todo List</h2>
        <TodoList todos={todos} onToggle={togleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
