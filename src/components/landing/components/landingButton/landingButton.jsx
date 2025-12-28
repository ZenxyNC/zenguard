
import { useNavigate } from "react-router-dom";

export default function LandingButton({ children, className, navigation, downloadurl }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (downloadurl) {
      window.open(downloadurl, '_blank');
    } else if(navigation.includes("#")) {
      window.location.href = navigation;
    } else if (navigation.includes("http")) {
      window.open(navigation, '_blank');
    } else {
      navigate(navigation);
    }
  }

  return (
    <button 
      id="landing-button" 
      className={className}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}