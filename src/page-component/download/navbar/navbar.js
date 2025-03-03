import './navbar.css';
import ZenGuard from '../../../resource/ZenGuard.png'
import { useState } from 'react';

export default function Navbar() {

  return(
    <>
      <div id="navbar-mainBody">
        <div id='navbar-innerWrapper-download'>
          <img src={ZenGuard} alt="" id='navbar-image'></img>
          <span id='navbar-initial'>ZenGuard</span>
        </div>
      </div>
    </>
  )
}