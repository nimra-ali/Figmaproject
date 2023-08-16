import React from 'react'
import pic1 from './Images/Hero image.svg'
import './Text.css'

function Text() {
  return (
    
    <div className='main'>
<div className='texts'>
<h1 className='H1'>WELCOME TO META MOOSE WORLD </h1>
{/* <h1 className='H1'>MOOSE WORLD</h1> */}
<div className='paraa'>
    <p className='P'>The woodland of Metaverse is home to 8,888 programmatically generated Moose.
    They are massive, majestic, 6 feet tall, and super strong. Meta Moose is lovingly crafted
    collection that is  powered by the Ethereum Blockchain. Come have a look around!</p>
</div>
<div className='buttons'>
<button className='D'>DISCARD</button>
<button className='T'>TWITTER</button>
</div>
</div>
<div className='heroo'>
    <img className='horse' src={pic1} alt='main-pic'/>
</div>
    </div>
  )
}

export default Text