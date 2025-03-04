import Navbar from './navbar/navbar.js';
import './download.css';
import { useState } from 'react';
import Checkout from './CheckOut/checkout.js'


export default function Download() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCheckout, setIsCheckout] = useState(false)
  const [isInfo, setIsInfo] = useState(false)

  function handleCardChange(card) {
    setSelectedCard(card);

    document.getElementById('checkout').style.display = 'block'
    setTimeout(() => {
      window.location.href = `#checkout`
    }, 100)
  }

  function handleInfoDisplay() {
    const infoDisplay = document.getElementById('checkOut-mobile-detailinfo')
    if(isInfo) {
      setIsInfo(false)
      infoDisplay.style.opacity = '0'
    } else if(!isInfo) {
      setIsInfo(true)
      infoDisplay.style.opacity = '1'
    }
  }

  return(
    <>
      <Navbar />
      {isCheckout && 
        <Checkout selectedCard={selectedCard} onClose={(e) => setIsCheckout(false)} />
      }
      <div id='--background'></div>
      <div className='--screen-viewported' id='screen-1'>
        <div id='head-title-download'>Choose Your Plan.</div>
        <div id='cardPack-wrapper'>
          <div style={{width: '50px', position: 'relative', height: '50px', marginLeft: '50px'}}></div>

          <div tabIndex={0} 
          id='card-std'
          onClick={(e) => handleCardChange('Standard')}
          onKeyDown={(e) => handleCardChange('Standard')}
          >
            <div className='cardPack-price'  translate='no'>
              $35.0
            </div>
            <div className='cardPack-annual'>
              /month
            </div>
            <div className='cardPack-description'>
              Suitable for normal-scale software. Settings is auto-set by system and only a few that can be changed.
            </div>
            <div className='cardPack-title'>
              Standard Plan.
            </div>
          </div>

          <div tabIndex={0} 
          id='card-prem'
          onClick={(e) => handleCardChange('Premium')}
          onKeyDown={(e) => handleCardChange('Premium')}
          >
            <div className='cardPack-price' translate='no'>
              $95.0
            </div>
            <div className='cardPack-annual'>
              /month
            </div>
            <div className='cardPack-description'>
              Suitable for big-scale software. Administrator can setting and manage security protocol.
            </div>
            <div className='cardPack-title'>
              Premium Plan.
            </div>
          </div>

          <div tabIndex={0} 
          id='card-pro'
          onClick={(e) => handleCardChange('Professional')}
          onKeyDown={(e) => handleCardChange('Professional')}
          > 
            <div className='cardPack-price' translate='no'>
              $120.0
            </div>
            <div className='cardPack-annual'>
              /month
            </div>
            <div className='cardPack-description'>
            Suitable for huge-scale software. Administrator can fully setting, manage, and modify security protocol; Also, tune the AI model.
            </div>
            <div className='cardPack-AITag'>
              <div className='AITag-name'>
                ZenAI-Powered
              </div>
              <div className='AITag-box'></div>
            </div>
            <div className='cardPack-title'>
              Professional Plan.
            </div>
          </div>

          <div style={{width: '50px', position: 'relative', height: '50px', marginLeft: '50px'}}></div>
        </div>
      </div>
      <div className='--screen-viewported' id='checkout'>
        <div id='head-title-download' translate='no'>Check out.</div>
        <div id='head-desc'>*Double-click the card to checkout.</div>
        <div id='cardDetails-wrapper'>
          {selectedCard && 
            <div id='cardCO-std' className={`cardCO ${selectedCard === 'Standard' ? 'show' : 'hide'}`}>
              <div className='cardPack-price' translate='no'>
                $35.0
              </div>
              <div className='cardPack-annual'>
                /month
              </div>
              <div className='cardPack-description'>
                Suitable for normal-scale software. Settings is auto-set by system and only a few that can be changed.
              </div>
              <div className='cardPack-title'>
                Standard Plan.
              </div>
            </div>
          }
          {selectedCard && 
            <div id='cardCO-prem' className={`cardCO ${selectedCard === 'Premium' ? 'show' : 'hide'}`}>
              <div className='cardPack-price' translate='no'>
                $95.0
              </div>
              <div className='cardPack-annual'>
                /month
              </div>
              <div className='cardPack-description'>
                Suitable for big-scale software. Administrator can setting and manage security protocol.
              </div>
              <div className='cardPack-title'>
                Premium Plan.
              </div>
            </div>
          }
          {selectedCard && 
            <div id='cardCO-pro' className={`cardCO ${selectedCard === 'Professional' ? 'show' : 'hide'}`}>
              <div className='cardPack-price' translate='no'>
                $120.0
              </div>
              <div className='cardPack-annual'>
                /month
              </div>
              <div className='cardPack-description'>
              Suitable for huge-scale software. Administrator can fully setting, manage, and modify security protocol; Also, tune the AI model.
              </div>
              <div className='cardPack-AITag'>
                <div className='AITag-name'>
                  ZenAI-Powered
                </div>
                <div className='AITag-box'></div>
              </div>
              <div className='cardPack-title'>
                Professional Plan.
              </div>
            </div>
          }
          <div id='checkOut-mobile-detailinfo'>
          On the first purchase, you’ll get free 7-days extension. You can request for refund until 3 days after purchase.
            <br/><div className='--container-desc-extender'/>Don’t forget to renew the plan each month. Late pay at your own risk (Security protocol will be shutted down after 2 days of late and you’ll have to set all up again).
            <br/><div className='--container-desc-extender'/>Using ZenGuard for the first time may be very confusing, feel free to see our usage manual.
          </div>
          <div id='itemCO-mobile'>
            <button id='checkOut-mobile-button' onClick={(e) => setIsCheckout(true)} translate='no'>
              Check out
            </button>
            <button id='checkOut-mobile-info' onClick={handleInfoDisplay}>
              <div className='img'></div>
            </button>
          </div>
          <div id='checkOut-hover' onDoubleClick={(e) => setIsCheckout(true)} translate='no'>Double-click to Check Out.</div>
          <div id='itemCO-title-desktop'>
            ZenGuard {selectedCard} Plan.
          </div>
          <div id='itemCO-desc-desktop'>
            On the first purchase, you’ll get free 7-days extension. You can request for refund until 3 days after purchase.
            <br/><div className='--container-desc-extender'/>Don’t forget to renew the plan each month. Late pay at your own risk (Security protocol will be shutted down after 2 days of late and you’ll have to set all up again).
            <br/><div className='--container-desc-extender'/>Using ZenGuard for the first time may be very confusing, feel free to see our usage manual.
          </div>
          
        </div>
      </div>
    </>
  )
}