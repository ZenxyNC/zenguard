import "./containerbox.css";

export function ContainerSmall({ children }) {
  return (
    <div id="containerbox-small">
      {children}
    </div>
  )
}

export function ContainerLarge({ children, isParent = false }) {
  return (
    <div
      id="containerbox-large"
      className={isParent ? "isParent" : ""}
    >
      {children}
    </div>
  )
}