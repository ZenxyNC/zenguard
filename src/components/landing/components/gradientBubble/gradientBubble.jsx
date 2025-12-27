import "./gradientBubble.css"

export default function GradientBubble({ 
  size, color, opacity, blurRadius, posX, posY, className
}) {
  const customStyle = {
    width: size ? size : "var(--gradient-bubble-size)",
    height: size ? size : "var(--gradient-bubble-size)",
    backgroundColor: color ? color : "#007AFF",
    opacity: opacity ? opacity : "auto",
    filter: blurRadius ? `blur(${blurRadius})` : "blur(var(--bubble-blur))",
    transform: `translate(${posX}, ${posY})`,
  }

  return (
    <div id="gradientBubble" style={customStyle} className={className} />
  )
}