import { Modal } from "components/modal-compound/modal"
import useInput from "hooks/use-input"

interface TodoAddModalProps {
  onCloseModal: () => void
}

export default function TodoAddModal(props: TodoAddModalProps) {
  const descriptionStates = useInput((value) => value.trim().length !== 0)

  return (
    <Modal value={{ ...props, ...descriptionStates }}>
      <Modal.Backdrop />
      <Modal.Container>
        <Modal.Title>Add Task</Modal.Title>
        <Modal.Input placeholder="Enter your Todo!" />
      </Modal.Container>
    </Modal>
  )
}
