import './navbar.css';
import ZenGuard from '../../resource/ZenGuard.png'
import { useState } from 'react';

export default function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState("Overview")
  const [menuOpened, setMenuOpened] = useState(false)



  function openNavigationMenu() {
    if(menuOpened) {
      document.getElementById('navbar-menu-mobile').style.top = '-50%';
      setMenuOpened(false)
    } else if(!menuOpened) {
      document.getElementById('navbar-menu-mobile').style.top = '80px';
      setMenuOpened(true)
    }
  }

  function autoHref(target, loc) {
    openNavigationMenu()
    setSelectedMenu(target);
    window.location.href = `#${loc}`
  }
  return(
    <>
      <div id="navbar-mainBody">
        <div id='navbar-innerWrapper'>
          <img src={ZenGuard} alt="" id='navbar-image'></img>
          <span id='navbar-initial'>ZenGuard</span>
          <div id='navbar-menu' onClick={openNavigationMenu}></div>
          <div id='navbar-menu-desktop'>
            {selectedMenu && 
              <span className={`--desktopMenu-child ${selectedMenu === "Overview" ? "selected" : ""}`} onClick={() => autoHref("Overview", "head-text")}>Overview</span>
            }
            {selectedMenu && 
              <span className={`--desktopMenu-child ${selectedMenu === "Download" ? "selected" : ""}`} onClick={() => autoHref("Download", "installation")}>Download</span>
            }
            {selectedMenu && 
              <span className={`--desktopMenu-child ${selectedMenu === "Usage" ? "selected" : ""}`} onClick={() => autoHref("Usage", "tutorial")}>Usage</span>
            }
            <span className='--desktopMenu-child-report'>Report</span>
          </div>
        </div>
      </div>
      <div id='navbar-menu-mobile'>
          {selectedMenu &&
            <div className={`--mobileMenu-child ${selectedMenu === "Overview" ? "selected" : ""}`} onClick={() => autoHref("Overview", "head-text")}>Overview</div>
          }
          {selectedMenu &&
            <div className={`--mobileMenu-child ${selectedMenu === "Download" ? "selected" : ""}`} onClick={() => autoHref("Download", "installation")} id='Overview'>Download</div>
          }
          {selectedMenu &&
            <div className={`--mobileMenu-child ${selectedMenu === "Usage" ? "selected" : ""}`} onClick={() => autoHref("Usage", "tutorial")} id='Overview'>Usage</div>
          }
          <div className='--mobileMenu-child-report' id='Report'>Report</div>
        </div>
    </>
  )
}