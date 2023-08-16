import React from 'react'
import './Foam.css'
import bgimg from './Images/Mint Bg.png'
import rect from './Images/Rectangle 34.png'
import line from './Images/Line 11.png'
function Foam() {
  return (
    <div className='foam-main'>
      <div className='image'>
        <img className='bg-img' src={bgimg} alt='background' />
      </div>
      <div className='form'>
        <img className='black' src={rect} alt='box' />
        <h1 className='boxh1'>Mint your mooose.</h1>
        <p className='boxp'>My balance: 0 ETH</p>
        <p className='boxp2'>CONNECT WALLET</p>
        <img className='lines' src={line} alt='linee' />
        <div className='all'>
          <div><p className='p3'>Amount to buy</p></div>
          <div className='twoo'>
            <p className='minus'>–</p>
          <button className='bttn'>2</button>
          <p className='plus'>+</p>
          <p className='max'>Max</p>
         
          </div>
          <div><img className='lines1' src={line} alt='linee' /></div>
        </div>
        <div>
          <p className='p2nd'>Price per token</p>
          <p className='amm'>0.000 ETH</p>
        </div>
        <div><img className='lines2' src={line} alt='linee' /></div>
        <div>
          <p className='p3rd'>Total price</p>
          <p className='amm1'>0.000 ETH</p>
          <button className='mintbtn'>MINT</button>
        </div>
      </div>

    </div>
  )
}

export default Foam;