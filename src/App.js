import TodoList from './Todo/TodoList';

const todos = [
  {
    id: 1,
    completed: false,
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
];

function App() {
  return (
    <div className="wrapper todo">
      <h1>React Todo</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
