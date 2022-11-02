import React, { useState } from "react";
import "./header.css";
function Header(props) {
  const [inputText, setInputText] = useState("");
  const { addNewTask } = props;
  const keyPressEnter = (e) => {
    if (e.target.value && e.keyCode === 13) {
      addNewTask(e.target.value);
      setInputText("");
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="newTodo"
        type="text"
        placeholder="what needs to be done?"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={keyPressEnter}
      />
    </header>
  );
}
export default Header;
