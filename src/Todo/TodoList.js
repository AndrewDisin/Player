import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './todo.css';

function TodoList(props) {
  return props.todos.length > 0 ? (
    <ul className="todo__list">
      {props.todos.map((todo) => {
        return (
          <TodoItem todo={todo} key={todo.id} onCompleted={props.onToggle} />
        );
      })}
    </ul>
  ) : (
    <div className="empty-text">Список пуст</div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCompleted: PropTypes.func,
};

export default TodoList;
