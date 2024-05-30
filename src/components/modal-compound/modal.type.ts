import { ChangeEvent, PropsWithChildren } from "react"

export interface ModalContextProps {
  inputValue: string
  onCloseModal: () => void
  onInputValueChange: (event: ChangeEvent<HTMLInputElement>) => void
  onInputBlur: () => void
  onInputReset?: () => void
}

export interface ModalContextValue extends PropsWithChildren {
  value: ModalContextProps
}
