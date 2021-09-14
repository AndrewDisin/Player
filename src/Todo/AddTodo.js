import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './form-create.css';

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue('');

  function submitHandler(e) {
    e.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form className="form-create" onSubmit={submitHandler}>
      <input
        className="form-create__input"
        type="text"
        placeholder="Введите заголовок"
        {...input.bind}
      />
      <button className="form-create__button" type="submit">
        Create Todo
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
