import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase/firebase.config";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "inprogress":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  //create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please write something");
      return;
    }
    if (details === "") {
      alert("Please write something");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
      inprogress: true,
      details: details,
    });
    setInput("");
    setDetails("");
  };

  //read todo
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArr = [];
      QuerySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //update status
  const taskComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
      inprogress: !todo.inprogress,
    });
  };

  //delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const todoInfo = {
    todos,
    setTodos,
    filteredTodos,
    setStatus,
    input,
    details,
    setDetails,
    setInput,
    taskComplete,
    createTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={todoInfo}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
