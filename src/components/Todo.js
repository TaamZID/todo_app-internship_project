import React from "react";
import { FaTrash } from "react-icons/fa";

const style = {
  li: `bg-slate-200 p-4 my-2 capitalize cursor-pointer`,
  liComplete: `bg-slate-400 p-4 my-2 capitalize`,
  row: `flex items-center`,
  text: `ml-2 cursor-pointer flex items-center text-purple-900`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
  btr: `flex justify-between`,
};

const Todo = ({ todo, taskComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li} draggable>
      <div className={style.btr}>
        <div className={style.row}>
          <input
            onChange={() => taskComplete(todo)}
            type="checkbox"
            checked={todo.completed ? "checked" : ""}
          />
          <h2
            onClick={() => taskComplete(todo)}
            className={todo.completed ? style.textComplete : style.text}
          >
            <p className="text-lg">{todo.text}</p>
          </h2>
        </div>
        <div>
          <button onClick={() => deleteTodo(todo.id)}>
            {" "}
            <FaTrash></FaTrash>{" "}
          </button>
        </div>
      </div>
      <br />
      <h3>{todo.details}</h3>
    </li>
  );
};

export default Todo;
