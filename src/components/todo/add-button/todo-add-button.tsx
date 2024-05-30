import useToggle from "hooks/use-toggle"
import TodoAddModal from "../modal/todo-add-modal"
import classes from "./todo-add-button.module.scss"

export default function TodoAddButton() {
  const { isToggle, handleCloseToggle, handleOpenToggle } = useToggle()
  return (
    <>
      {isToggle && <TodoAddModal onCloseModal={handleCloseToggle} />}
      <button className={classes["todo-add-button"]} onClick={handleOpenToggle}>
        <img src="/images/plus.svg" alt="" />
      </button>
    </>
  )
}
