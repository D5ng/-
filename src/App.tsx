import classes from "./App.module.scss"
import TodoHeader from "components/todo/header/todo-header"
import TodoList from "components/todo/list/todo-list"

export default function App() {
  return (
    <main className={classes.main}>
      <section className={classes.todo}>
        <TodoHeader />
        <TodoList />
      </section>
    </main>
  )
}
