import React, { useState } from "react";
import "./todoApp.css";
import Header from "../component/header/Header";
function TodoApp() {
  const [tasks, setTasks] = useState([]);
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
  return (
    <div className="todo_app">
      <Header addNewTask={addNewTask} />
      {tasks.length > 0 ? (
        <>
          <section className="main">
            <ul className="todo_list">
              {tasks.map((task, index) => {
                return <li key={index}>{task.content}</li>;
              })}
            </ul>
          </section>
          <footer className="footer">
            <span className="todo_count">
              <strong>3</strong>
              <span> </span>
              <span>items</span>
              <span> left</span>
            </span>
            <ul className="filters">
              <li>
                <a href="#/">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
          </footer>
        </>
      ) : null}
    </div>
  );
}

export default TodoApp;
