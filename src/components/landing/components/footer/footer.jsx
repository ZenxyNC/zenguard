import "./footer.css"
import logo from "../../../../resources/icons/ZenGuard.png"

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div id="footer-mainbody">
      <div id="footer-icon">
        <img id="footer-logo" src={logo} alt="" />
        <div id="footer-name">
          ZenGuard
        </div>
      </div>
      <div id="footer-licenses">
        {year} © ZenTech. MIT License.
      </div>
    </div>
  )
}