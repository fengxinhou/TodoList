import React from "react";
import "./todoList.css";
function TodoList(props) {
  return (
    <div className="todo_app">
      <header className="header">
        <h1>todos</h1>
        <input className="newTodo" placeholder="what needs to be done?" />
      </header>
      <section className="main">
        <ul className="todo_list">
          <li>逛街</li>
          <li>跑步</li>
          <li>看电影</li>
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
    </div>
  );
}

export default TodoList;
