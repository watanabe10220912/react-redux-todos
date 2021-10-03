import React from "react";
import PropTyps from 'prop-types';
import classNames from "classnames";

const Todo = ({ onClick, todo }) => {
  const text = todo.text;
  const completed = todo.completed;
  return (
    <li
      onClick={onClick}
      className={classNames(
          'todo-item',
          {'todo-item__text--completed' : completed}
      )}
    >
      {completed ? "👌" : "👋"}{" "}
      <span>
        {text}
      </span>
    </li>
  )
};

Todo.propTypes = {
  onClick: PropTyps.func.isRequired,
  todo: PropTyps.shape({
    completed: PropTyps.bool.isRequired,
    text: PropTyps.string.isRequired
  })
}

export default Todo;