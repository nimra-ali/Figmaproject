import React from 'react'
import './Narrative.css'
import img1 from './Images/Manuscript 1.png'
import img2 from './Images/Image.png'
import img3 from './Images/Manuscript 2.png'

function Narrative() {
  return (
    <div className='mainn'>
      <div className='flex'>
        <div className='mainn2'>
        <h1 className='h2'>OUR NARRATIVE.</h1>
         <div className='one'>
<img className='script' src={img1} alt='script'/>
         </div>
        <div className='two'>
            <img className='script2' src={img2} alt='script2'/>
            </div> 
        </div>
            <div className='script3'>
<img className='short' src={img3} alt='script3'/>
            </div>
            </div>
    </div>
  )
}

export default Narrative;