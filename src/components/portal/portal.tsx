import { PropsWithChildren } from "react"
import { createPortal } from "react-dom"

interface PortalProps extends PropsWithChildren {
  selector: string
}

export default function Portal(props: PortalProps) {
  const portalElem = document.querySelector(props.selector)!
  const portal = createPortal(props.children, portalElem)

  return portal
}
