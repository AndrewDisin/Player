import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './todo.css';

function TodoList(props) {
  return (
    <ul className="todo__list">
      {props.todos.map((todo) => {
        return (
          <TodoItem todo={todo} key={todo.id} onCompleted={props.onToggle} />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCompleted: PropTypes.func,
};

export default TodoList;
