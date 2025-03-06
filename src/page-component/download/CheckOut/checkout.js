import { useState } from 'react'
import './checkout.css'
import { _DATABASE } from './cred/loginAssets'
import emailjs from '@emailjs/browser'

export default function Checkout({ selectedCard, onClose }) {
  const [ZenID, setZenID] = useState(null)
  const [inputtedVerifCode, setInputtedVerifCode] = useState(null)
  const [verifCode, setVerifCode] = useState(generateVerifCode)
  const [getCodeDisabled, setGetCodeDisabled] = useState(false)

  setTimeout(() => {
    document.getElementById('mainBody-checkout').style.bottom = '0px'
    document.getElementById('mainBody-checkout').style.opacity = '1'

  }, 100)

  function hanldeSubmit(ev) {
    ev.preventDefault();
    if(parseInt(inputtedVerifCode) === verifCode) {
      onClose()
    }
    console.log(inputtedVerifCode)
  }

  function handleZenID(ev) {
    document.getElementById('input-ZenID').style.border = 'none';
    setZenID(ev.target.value)
  }

  function generateVerifCode() {
    const code = Math.floor(Math.random() * 1000000)
    return code;
  }

  const sendVerifCode = () => {
    if (ZenID) {
      if(ZenID in _DATABASE) {
        console.log(verifCode)
        const templateParams = {
          plan : `ZenGuard ${selectedCard} Plan`,
          verif : verifCode
        }
        emailjs.send('service_bfqnc8j', 'template_a4sdp3w', templateParams, 'firPEQIDcUxMuvkQ8').then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );
        setGetCodeDisabled(true)
        document.getElementById('getVerifCode').innerHTML = "Sent!"
        try {
          setTimeout(() => {
            setGetCodeDisabled(false)
            document.getElementById('getVerifCode').innerHTML = "Get Code"
          }, 60000)
        } catch(err) {
          console.warn('Element with id getVerifCode is not defined.')
        }
      } else {
        document.getElementById('input-ZenID').style.border = '1px solid #FF393D';
      }
    } else {
        document.getElementById('input-ZenID').style.border = '1px solid #FF393D';
    }
  };

  function startDownload() {
    if(ZenID) {
      if(ZenID in _DATABASE) {
        if(inputtedVerifCode === verifCode.toString()) {
          const link = document.createElement("a");
          link.href = "https://raw.githubusercontent.com/zenxync/zenguard/main/public/ZenGuard.zip";
          link.download = "ZenGuard.zip";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          document.getElementById('input-Verif').style.border = '1px solid red'
        }
      }
    }
  }
  return(
    <>
      <div id="mainBody-checkout">
        <div id='head-title-checkout'>Get ZenGuard</div>
        <form onSubmit={(ev) => hanldeSubmit(ev)} id='userdata-input-download'>
          <input type='text' id='input-ZenID' placeholder='ZenID' required onInput={(ev) => handleZenID(ev)}/><br/>
          <input type='number' id='input-Verif' placeholder='Verification code' onInput={(e) => setInputtedVerifCode(e.target.value)} required/>
          <button type='button' id='getVerifCode' onClick={sendVerifCode} disabled={getCodeDisabled}>Get Code</button>
          <div id='actionArea'>
            <button id='actionArea-cancel' type='button' onClick={onClose} translate='no'>Cancel</button>
            <button id='actionArea-submit' type='button' onClick={startDownload} translate='no'>Get ZenGuard</button>
          </div>
        </form>
      </div>
    </>
  )
}