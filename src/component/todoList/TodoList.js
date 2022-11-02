import React, { useState } from "react";
import "./todoList.css";
import Modal from "../Modal/Modal";
function TodoList(props) {
  const { tasks, editTasks } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [modifyTask, setModifyTask] = useState({});
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
  const showModal = (id, content) => {
    setModifyTask({ id, content });
    setModalOpen(true);
  };
  const editTask = (modalInputText, itemId) => {
    const newTasks = tasks.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          content: modalInputText,
        };
      }
      return item;
    });
    editTasks(newTasks);
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const clickEscCode = (e) => {
    if (modalOpen && e.keyCode === 27) {
      setModalOpen(false);
    }
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
                  <button
                    className={completed ? "done" : null}
                    onClick={() => showModal(id, content)}
                  >
                    {content}
                  </button>
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
      <Modal
        visible={modalOpen}
        editTask={editTask}
        modifyTask={modifyTask}
        onClose={handleCloseModal}
        clickEscCode={clickEscCode}
      />
    </section>
  );
}

export default TodoList;
