import React from "react"
import { Todo } from "./todo-list.constant"
import classes from "./todo-list-item.module.scss"

export default function TodoListItem(todo: Todo) {
  return (
    <li className={classes["todo-item"]}>
      <span className={classes["todo-item__description"]}>{todo.description}</span>
      <button className={`${classes["todo-item__button"]} ${classes["todo-item__selected"]}`}></button>
    </li>
  )
}
