import classes from "./todo-add-button.module.scss"

export default function TodoAddButton() {
  return (
    <button className={classes["todo-add-button"]}>
      <img src="/images/plus.svg" alt="" />
    </button>
  )
}
