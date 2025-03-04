import './navbar.css';
import ZenGuard from '../../../resource/ZenGuard.png'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  function redirect(path) {
    navigate(path)
  }


  return(
    <>
      <div id="navbar-mainBody">
        <div id='navbar-innerWrapper-download' onClick={(e) => redirect('/zenguard/')}>
          <img src={ZenGuard} alt="" id='navbar-image'></img>
          <span id='navbar-initial' translate='no'>ZenGuard</span>
        </div>
      </div>
    </>
  )
}