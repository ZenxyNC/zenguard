
import { useNavigate } from "react-router-dom";

export default function LandingButton({ children, className, navigation }) {
  const navigate = useNavigate()

  return (
    <button 
      id="landing-button" 
      className={className}
      onClick={() => navigate(navigation)}
    >
      {children}
    </button>
  )
}