import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './todo.css';

function TodoList(props) {
  return (
    <ul className="todo__list">
      {props.todos.map((todo) => {
        return <TodoItem id={todo.id} title={todo.title} key={todo.id} />;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
