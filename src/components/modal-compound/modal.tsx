import { createContext, InputHTMLAttributes, useContext } from "react"
import { ModalContextProps, ModalContextValue } from "./modal.type"
import { initialModalContext } from "./modal.constant"
import classes from "./modal.module.scss"

export const ModalContext = createContext<ModalContextProps>(initialModalContext)

export function useModalContext() {
  const modalContext = useContext(ModalContext)
  if (!modalContext) throw new Error("Modal Context에서 사용해야합니다.")
  return modalContext
}

export function Modal(props: ModalContextValue) {
  return (
    <ModalContext.Provider value={props.value}>
      <div className={classes.modal}>{props.children}</div>
    </ModalContext.Provider>
  )
}

function Backdrop() {
  const modalContext = useModalContext()
  return <div className={classes.backdrop} onClick={modalContext.onCloseModal}></div>
}

function Title() {
  const modalContext = useModalContext()
  return <h2>{modalContext.title}</h2>
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const modalContext = useModalContext()
  return (
    <input
      type={props.type}
      onChange={modalContext.onChange}
      onBlur={modalContext.onBlur}
      value={modalContext.inputValue}
      placeholder={props.placeholder}
    />
  )
}

// function Button(){
//   const modalContext = useModalContext()
//   return <button type="button">

//   </button>
// }

Modal.Backdrop = Backdrop
Modal.Title = Title
Modal.Input = Input
