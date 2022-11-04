import React, { createContext, useEffect, useState } from "react";
import "./todoApp.css";
import Header from "../component/header/Header";
import TodoList from "../component/todoList/TodoList";
import Footer from "../component/footer/Footer";

export const CHECK_OPTIONS = {
  ALL: "All",
  UNCOMPLETED: "Active",
  COMPLETED: "Completed",
};

export const TodoContext = createContext({});

function TodoApp() {
  const [filterParam, setFilterParam] = useState(() => {
    return localStorage.getItem("filter") || CHECK_OPTIONS.ALL;
  });
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  });
  const addNewTask = (value) => {
    if (value) {
      const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
        content: value,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const editTasks = (tasks) => {
    setTasks(tasks);
  };

  const checkAllTasks = (tasks) => {
    let doneCount = tasks.filter((task) => task.completed).length;
    let allCount = tasks.length;
    const newTasks = tasks.map((task) => {
      return {
        ...task,
        completed: doneCount !== allCount,
      };
    });
    setTasks(newTasks);
  };

  const changeCheckSelection = (value) => {
    setFilterParam(value);
    localStorage.setItem("filter", value);
  };

  return (
    <TodoContext.Provider value={{ filterParam: filterParam, tasks: tasks }}>
      <div className="todo_app">
        <Header addNewTask={addNewTask} />
        {tasks.length > 0 ? (
          <>
            <TodoList editTasks={editTasks} checkAllTasks={checkAllTasks} />
            <Footer changeCheckSelection={changeCheckSelection} />
          </>
        ) : null}
      </div>
    </TodoContext.Provider>
  );
}

export default TodoApp;
