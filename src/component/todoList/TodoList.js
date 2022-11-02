import React from "react";
import "./todoList.css";
function TodoList(props) {
  const { tasks, editTasks } = props;
  const changeCheck = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    editTasks(newTasks);
  };
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    editTasks(newTasks);
  };
  return (
    <section className="main">
      <input type="checkbox" id="toggle_all" className="toggle_all" />
      <label htmlFor="toggle_all"></label>
      <ul className="todo_list">
        {tasks.map(({ id, content, completed }, index) => {
          return (
            <li key={index}>
              <div>
                <label className="check">
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => changeCheck(id)}
                  />
                  <span className="checkmark"></span>
                  <button className="content">{content}</button>
                </label>
                <button
                  className="delete"
                  onClick={() => deleteTask(id)}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
