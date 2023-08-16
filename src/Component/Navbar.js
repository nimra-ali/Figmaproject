import React from 'react'
import './Navbar.css'
import img1 from './Images/Logo.png'
import img2 from './Images/akar-icons_discord-fill.png'
import img3 from './Images/akar-icons_twitter-fill.png'
import img4 from './Images/Frame 184@2x.png'
function Navbar() {
  return (
    <nav className='nav'>
      <div>
        <img className="imgg" src={img1} alt='logo' />
      </div>
      <div className='list'>
        <ul className='ul'>
          <li>Story</li>
          <li>Roadmap</li>
          <li>Specs And Traits</li>
          <li >Team</li>
          <li>FaQ</li>
        </ul>
        <div className='icon1'>
          <img src={img2} alt='lcon' />
        </div>
        <div className='icon2'>
          <img src={img3} alt='icon2' />
           </div>
           <div className='board'>
<img className='b-pic' src={img4} alt='board'/>
           </div>
      </div>
      </nav>
  )
}
export default Navbar;