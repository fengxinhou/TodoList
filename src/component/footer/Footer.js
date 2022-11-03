import React, { useContext } from "react";
import "./footer.css";
import { CHECK_OPTIONS, Context } from "../../pages/TodoApp";

function Footer(props) {
  const { changeCheckSelection } = props;
  const { tasks, filterParam } = useContext(Context);
  return (
    <footer className="footer">
      <span className="todo_count">
        <strong>{tasks.filter(({ completed }) => !completed).length}</strong>
        <span> </span>
        <span>items</span>
        <span> left</span>
      </span>
      <ul className="filters">
        {Object.values(CHECK_OPTIONS).map((item, index) => {
          return (
            <li className="check_radio" key={index}>
              <input
                type="radio"
                value={item}
                name="searchData"
                id={item}
                checked={filterParam === item}
                onChange={() => changeCheckSelection(item)}
              />
              <label htmlFor={item}>{item}</label>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
