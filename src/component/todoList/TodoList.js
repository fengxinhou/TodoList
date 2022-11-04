import React, { useContext, useState } from "react";
import "./todoList.css";
import Modal from "../Modal/Modal";
import { CHECK_OPTIONS, TodoContext } from "../../pages/TodoApp";
function TodoList(props) {
  const { editTasks, checkAllTasks } = props;
  const { tasks, filterParam } = useContext(TodoContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [modifyTask, setModifyTask] = useState({});

  const filterTask =
    filterParam === CHECK_OPTIONS.COMPLETED
      ? tasks.filter(({ completed }) => completed)
      : filterParam === CHECK_OPTIONS.UNCOMPLETED
      ? tasks.filter(({ completed }) => !completed)
      : tasks;
  // window.localStorage.setItem("todos", JSON.stringify(filterTask));

  // useEffect(() => {}, []);
  const selectAllTask = () => {
    checkAllTasks(tasks);
  };

  const updateTask = (id, check) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: check,
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

  const showModal = (id, content) => {
    setModifyTask({ id, content });
    setModalOpen(true);
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
      <input
        type="checkbox"
        id="toggle_all"
        className="toggle_all"
        onChange={selectAllTask}
      />
      <label htmlFor="toggle_all"></label>
      <ul className="todo_list">
        {filterTask.map(({ id, content, completed }, index) => {
          return (
            <li key={index}>
              <div>
                <label className="check">
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => updateTask(id, e.target.checked)}
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
