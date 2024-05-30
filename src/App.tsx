import classes from "./App.module.scss"
import TodoHeader from "components/todo/header/todo-header"

export default function App() {
  return (
    <div>
      <TodoHeader />
    </div>
  )
}

/**
 * ! Todo Header
 * ! 현재 월
 * ! 현재 요일
 * ! 현재 일
 * ! 현재 task
 */
