import { ChangeEventHandler, useState } from "react"

type InputValidation = (value: string) => boolean

export default function useInput(inputValidation: InputValidation) {
  const [inputValue, setInputValue] = useState("")
  const [isTouched, setIsTouched] = useState(false)

  const onInputValueChange: ChangeEventHandler<HTMLInputElement> = (event) => setInputValue(event.target.value)
  const onInputBlur = () => setIsTouched(true)
  const onInputReset = () => {
    setInputValue("")
    setIsTouched(false)
  }

  const isValid = inputValidation(inputValue)
  const hasError = !isValid && isTouched

  return {
    isValid,
    hasError,
    inputValue,
    onInputValueChange,
    onInputBlur,
    onInputReset,
  }
}
