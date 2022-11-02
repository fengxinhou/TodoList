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
      <Header
        addNewTask={addNewTask}
        className={tasks.length > 0 ? "expand_collapse_tasks" : null}
      />
      {tasks.length > 0 ? (
        <>
          <section className="main">
            <input type="checkbox" id="toggle_all" className="toggle_all" />
            <label htmlFor="toggle_all"></label>
            <ul className="todo_list">
              {tasks.map((task, index) => {
                return (
                  <li key={index}>
                    <div>
                      <label className="check">
                        <input type="checkbox" className="toggle" />
                        <span className="checkmark"></span>
                        <button className="content">{task.content}</button>
                      </label>
                      <button className="delete"></button>
                    </div>
                  </li>
                );
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
