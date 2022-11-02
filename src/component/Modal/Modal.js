import React, { useEffect, useState } from "react";
import "./modal.css";

function Modal(props) {
  const { visible, modifyTask, onClose, editTask, clickEscCode } = props;
  const [modalInputText, setModalInputText] = useState("");
  const [itemId, setItemID] = useState(0);
  useEffect(() => {
    if (visible) {
      setModalInputText(modifyTask.content);
      setItemID(modifyTask.id);
    }
  }, [visible]);

  useEffect(() => {
    window.addEventListener("keydown", clickEscCode);
    return () => {
      window.removeEventListener("keydown", clickEscCode);
    };
  }, [clickEscCode]);
  const confirmInput = () => {
    if (modalInputText) {
      editTask(modalInputText, itemId);
      setModalInputText("");
    }
  };
  return (
    visible && (
      <>
        <div className="mask" />
        <div className="modal">
          <p>编辑</p>
          <input
            value={modalInputText}
            onChange={(e) => {
              setModalInputText(e.target.value);
            }}
          />
          <br />
          <button onClick={onClose}>关闭</button>
          <button onClick={confirmInput}>确定</button>
        </div>
      </>
    )
  );
}

export default Modal;
