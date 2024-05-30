import TodoHeader from "components/todo/header/todo-header"
import TodoList from "components/todo/list/todo-list"
import TodoAddButton from "components/todo/add-button/todo-add-button"
import classes from "./App.module.scss"

export default function App() {
  return (
    <main className={classes.main}>
      <section className={classes.todo}>
        <TodoHeader />
        <TodoList />
        <TodoAddButton />
      </section>
    </main>
  )
}
