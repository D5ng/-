import React from "react"
import MomentInstance from "utils/moment"
import classes from "./todo-header.module.scss"

export default function TodoHeader() {
  return (
    <header className={classes["todo-header"]}>
      <div className={classes["todo-inner-header"]}>
        <h1 className={classes["todo-header__date"]}>
          {MomentInstance.currentDay()}
          <span>
            ,{MomentInstance.currentDate()}
            <sup>st</sup>
          </span>
        </h1>
        <span className={classes["todo-header__month"]}>{MomentInstance.currentMonth()}</span>
        <span className={classes["todo-header-task-count"]}>3 Tasks</span>
      </div>
    </header>
  )
}
