import React from "react"
import classes from "./todo-header.module.scss"

export default function TodoHeader() {
  return (
    <header className={classes["todo-header"]}>
      <div className={classes["todo-inner-header"]}>
        <h1 className={classes["todo-header__date"]}>
          TuesDay,
          <span>
            31<sup>st</sup>
          </span>
        </h1>
        <span className={classes["todo-header__month"]}>Date</span>
        <span className={classes["todo-header-task-count"]}>3 Tasks</span>
      </div>
    </header>
  )
}
