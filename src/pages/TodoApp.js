import React, { createContext, useState } from "react";
import "./todoApp.css";
import Header from "../component/header/Header";
import TodoList from "../component/todoList/TodoList";
import Footer from "../component/footer/Footer";

export const CHECK_OPTIONS = {
  ALL: "All",
  UNCOMPLETED: "Active",
  COMPLETED: "Completed",
};

export const Context = createContext("");

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [filterParam, setFilterParam] = useState(CHECK_OPTIONS.ALL);
  const addNewTask = (value) => {
    if (value) {
      const newTask = {
        id: tasks.length,
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
  };

  return (
    <Context.Provider value={{ tasks: tasks, filterParam: filterParam }}>
      <div className="todo_app">
        <Header addNewTask={addNewTask} />
        {tasks.length > 0 ? (
          <>
            <TodoList editTasks={editTasks} checkAllTasks={checkAllTasks} />
            <Footer changeCheckSelection={changeCheckSelection} />
          </>
        ) : null}
      </div>
    </Context.Provider>
  );
}

export default TodoApp;
