import "./containerComponent.css"

export function ContainerTitle({ children }) {
  return (
    <h1 id="containerbox-title">
      {children}
    </h1>
  )
}

export function ContainerDate({ children }) {
  return (
    <h2 id="containerbox-date">
      {children}
    </h2>
  )
}

export function ContainerContent({ children, className }) {
  return (
    <div id="containerbox-content" className={className}>
      {children}
    </div>
  )
}