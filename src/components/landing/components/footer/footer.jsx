import "./footer.css"
import logo from "../../../../resources/icons/ZenGuard.png"

export default function Footer() {
  return (
    <div id="footer-mainbody">
      <div id="footer-icon">
        <img id="footer-logo" src={logo} alt="" />
        <div id="footer-name">
          ZenGuard
        </div>
      </div>
      <div id="footer-licenses">
        2025 © ZenGuard. MIT License.
      </div>
    </div>
  )
}