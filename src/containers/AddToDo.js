import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import PropTypes from 'prop-types';

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

AddToDo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(AddToDo);
