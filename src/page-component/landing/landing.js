import './landing.css';
import Navbar from '../navbar/navbar'
import arrow from '../../resource/arrow.svg'
import BlurredZG from '../../resource/ProgressiveBlur.png';
import { useNavigate } from 'react-router-dom';

export default function Landing() {

  const navigate = useNavigate();
  const redirect = (target) => {
    navigate(target)
  }


  return(
    <>
      <Navbar />
      <div id='--background'></div>
      <div id='--background-bubble'>
        <div className='bgBubble --007aff'></div>
        <div className='bgBubble --4E22E0'></div>
        <div className='bgBubble --0051FF'></div>
        <div className='bgBubble --11A69D'></div>
      </div>
      <div id='headText-wrapper'>
        <div id='head-text'>======================================= :: .Touch <span style={{color: "rgb(245, 245, 245, 0.8"}}>ZenBoot</span> for x84, ZenTech Inc. ;Local Data, Shared 0x6453 (d84ap)/Rev 0xd :: BUILD_CODE: <span style={{color: "rgb(245, 245, 245, 1"}}>ZenGuard</span>; :: BUILD_STAGE: BETA_DEV :: HASH_SERIAL_NUMBER: D.:01 CID:2308 CPV:131 CPFM:01 SCEP:01 BDID:06 ECID:XXXXXXXXXXXXXXXX IBFL:2D SIKA:00 SRNM:[XXXXXXXXXX] :: .isProtected ~ TRUE -/</div>
      </div>
      <div id='head-title'>
        ZenGuard.
      </div>
      <div id='head-description'>
        ZenGuard, a protection protocol for our ecosystem. Explore the latest security technology and secure your information seamlessly with ZenGuard. Being protected in seamless by ZenGuard.
      </div>
      <img src={arrow} alt='' id='arrow-desktop'></img>
      <div id='mainContent'>
        <div className='--container' id='LatestFromUs'>
          <div className='--container-title'>Latest from us.</div>
          <div className='--container-date'>March 09, 2025</div>
          <div className='--container-description'>
          The newest version of ZenGuard just released. In this version (1.2.3.0-RELEASE)  we bring a bunch of improvement.<br/><div className='--container-desc-extender'/>First thing first, we’ve updated the ZenGuard security. This security update will not let you use old, unsecure, and unoriginal ZenGuard version. So, don’t forget to update your ZenGuard and make sure you use the original one.<br/><div className='--container-desc-extender'/>Also, we bring some improvement to developer experience. We added return value response for easier debugging and management. Not just that, ZenGuard is now easier to use. One command doing all the function!
          </div>
        </div>
        <div className='--container' id='ZenGuard-Invitation'>
          <div className='--container-title'>Be a part of ZenGuard.</div>
          <div className='--container-description'>Be a part of ZenGuard. Submit your report and research related to software security.<br/><div className='--container-desc-extender'/>Any kind of contribution will be helping us.</div>
          <button className='--container-button'>Submit a report</button>
          <img src={BlurredZG} alt="" className='--container-image'/>
        </div>
        <div className='--container' id='Utilities'>
          <div className='--container Utilities-component' id='installation'>
            <div className='--container-title' style={{width: '70%'}}>Apply ZenGuard.</div>
            <div className='--container-description'>
              Use ZenGuard as your software security protocol. Seamless protection with great experience and performance.
            </div>
            <div className='--container-date' style={{color: 'rgb(0, 122, 255, 0.5)', fontSize: '16px'}}>*Paid feature.</div>
            <button className='--container-button --Installation-button' onClick={() => redirect('/download/')}>Download</button>
          </div>
          <div className='--container Utilities-component' id='tutorial'>
            <div className='--container-title' style={{width: '70%'}}>Learn ZenGuard.</div>
            <div className='--container-description'>
              See the vision and mission of ZenGuard. Also, learn how to use ZenGuard protocol properly. <br/><div className='--container-desc-extender'/> Better usage, better protection, better experience.
            </div>
            <button className='--container-button'>Learn more</button>
          </div>
        </div>
      </div>
    </>
  )
}