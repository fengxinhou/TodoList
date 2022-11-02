import React, { useState } from "react";
import "./todoApp.css";
import Header from "../component/header/Header";
import TodoList from "../component/todoList/TodoList";
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
  const editTasks = (tasks) => {
    setTasks(tasks);
  };
  return (
    <div className="todo_app">
      <Header
        addNewTask={addNewTask}
        className={tasks.length > 0 ? "expand_collapse_tasks" : null}
      />
      {tasks.length > 0 ? (
        <>
          <TodoList tasks={tasks} editTasks={editTasks} />
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
