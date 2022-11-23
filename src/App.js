import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import Todo from "./components/Todo";
import { TodoContext } from "./contexts/TodoProvider";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#f6d365] to-[#fda085]`,
  container: `font-serif bg-slate-100 max-w-[1000px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2 mb-2 text-purple-800`,
  form: `flex justify-between `,
  input: `border p-2 w-full text-xl`,
  status: `border ml-2 p-2 w-1/2 text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

function App() {
  const {
    setTodos,
    setStatus,
    input,
    setInput,
    details,
    setDetails,
    taskComplete,
    createTodo,
    deleteTodo,
    filteredTodos,
  } = useContext(TodoContext);

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h2 className={style.heading}>React Todo</h2>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Add Todo"
          />
          <input
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Add Details"
          />
          <button className={style.button}>
            {" "}
            <FaPlus size={30}></FaPlus>{" "}
          </button>
          <div className={`select ${style.status}`}>
            <select
              onChange={statusHandler}
              name="todos"
              className="filter-todo"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="inprogress">Inprogress</option>
            </select>
          </div>
        </form>
        <ul>
          {filteredTodos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              setTodos={setTodos}
              todo={todo}
              taskComplete={taskComplete}
              deleteTodo={deleteTodo}
            ></Todo>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
