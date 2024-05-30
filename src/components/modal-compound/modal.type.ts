import { PropsWithChildren } from "react"

export interface ModalContextProps {
  title: string
  inputValue: string
  onCloseModal: () => void
  onChange: () => void
  onBlur: () => void
}

export interface ModalContextValue extends PropsWithChildren {
  value: ModalContextValue
}
