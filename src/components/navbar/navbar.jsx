import { useNavigate } from "react-router-dom"
import "./navbar.css"

import logo from "../../resources/icons/ZenGuard.png"

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div id="navbar-mainbody">
      <div id="navbar-items"
        onClick={() => navigate("/")}
      >
        <img id="navbar-logo" src={logo} alt="" />
        <div id="navbar-name">ZenGuard</div>
      </div>
    </div>
  )
}