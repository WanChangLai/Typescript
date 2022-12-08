import React from "react";
import classes from "./Todos.module.css";

import TodoItem from "./TodoItem";
import Todo from "../models/todo";

//fc stands for functional component
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
