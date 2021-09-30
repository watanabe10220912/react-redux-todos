import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddToDo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        const text = input.value.trim();
        input.value = '';
        if (!text) {
          return;
        }
        console.log(text);
        dispatch(addTodo(text));
      }}>
        <input ref={(element) => input = element} />
        <button type="submit">
          Add ToDo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddToDo);
