import { todoItems } from "components/todo/list/todo-list.constant"
import TodoListItem from "components/todo/list/todo-list-item"
import classes from "./todo-list.module.scss"

export default function TodoList() {
  return (
    <ul className={classes["todo-list"]}>
      {todoItems.map((todo) => (
        <TodoListItem {...todo} key={todo.id} />
      ))}
    </ul>
  )
}
