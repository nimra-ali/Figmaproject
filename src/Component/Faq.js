import React from 'react'
import logo1 from './Images/akar-icons_discord-fill.png'
import logo2 from './Images/akar-icons_twitter-fill.png'
import './Faq.css'

function Faq() {
  return (

    <div className='faqmain'>
         <h1 className='faqh1'>FREQUENTLY ASKED QUESTIONS.</h1>    
       
        <div className='firstq'><h4>What is Meta Moose?</h4>
        <h5 className='icon'>△</h5>
        </div>
        <p className='answer'>Our adventure begins deep within the snowy forest. A herd of moose was peacefully living
             across the immense pond. They had no idea that the world was in grave <br/>danger and that it was time to 
             move on, but not all of them were lucky. A bright star fell from the sky, bearing a vital message. Only ten 
             of them will be given a second <br/> chance, 7 male and 3 female. It was time to move on to a new world, a new 
             universe, the Metaverse.</p>
             <div className='border'></div>
             <div className='secondq1'>
            <h4 >What is the total supply of the Meta Moose?</h4>
        <h3 className='icon3'>▽</h3>
        <div className='border3'></div>
        </div>
         <div className='secondq2'>
            <h4>When are the presale and public sale? </h4>
        <h3 className='icon4'>▽</h3>
        <div className='border4'></div>
        </div>
        <div className='secondq2'>
            <h4>How can I buy a Moose?</h4>
        <h3 className='icon4'>▽</h3>
        <div className='border4'></div>
        </div>
        <div className='secondq2'>
            <h4>What is the mint price?</h4>
        <h3 className='icon4'>▽</h3>
        <div className='border4'></div>
        </div>
        <div className='secondq2'>
            <h4>What are the royalties?</h4>
        <h3 className='icon4'>▽</h3>
        <div className='border4'></div>
        </div>
        <div className='secondq2'>
            <h4>How many Moose are reserved?</h4>
        <h3 className='icon4'>▽</h3>
        <div className='border4'></div>
        </div>
        <div className='secondq2'>
            <h4>What are the benefits of owning a Moose?</h4>
        <h3 className='icon4'>▽</h3>
        <div className='border4'></div>
        </div>
        <div className='secondq2'>
            <h4>What does the team plan to do after launch? </h4>
        <h3 className='icon4'>▽</h3>
        <div className='border4'></div>
        </div>
        {/* <footer> */}
        <div className='ic'>
        <div className='icon1'>
     <img className='iconn' src={logo1} alt='logos'/>
          </div>

          <div className='icon2'>
           <img className='iconn2' src={logo2} alt='logos2'/>
             </div>
             <h3 className='lop'> @2023 meta Moose</h3>
        </div>
             {/* <footer/> */}
        </div>
          

  
  )
}
export default Faq;