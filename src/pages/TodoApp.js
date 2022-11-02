import React, { useState } from "react";
import "./todoApp.css";
import Header from "../component/header/Header";
import TodoList from "../component/todoList/TodoList";
import Footer from "../component/footer/Footer";

export const CHECK_OPTIONS = {
  ALL: "全部",
  COMPLETED: "已完成",
  UNCOMPLETED: "未完成",
};
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
  const selectAllTasks = (tasks) => {
    const newTasks = tasks.map((task) => {
      return {
        ...task,
        completed: !task.completed,
      };
    });
    setTasks(newTasks);
  };
  return (
    <div className="todo_app">
      <Header
        addNewTask={addNewTask}
        className={tasks.length > 0 ? "expand_collapse_tasks" : null}
      />
      {tasks.length > 0 ? (
        <>
          <TodoList
            tasks={tasks}
            editTasks={editTasks}
            allTasks={selectAllTasks}
          />
          <Footer tasks={tasks} filterParam={filterParam} />
        </>
      ) : null}
    </div>
  );
}

export default TodoApp;
