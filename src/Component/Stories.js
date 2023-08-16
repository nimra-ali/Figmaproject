import React from 'react'
import './Stories.css'
import storypic from './Images/images.png'

function Stories() {
    return (
        <div className='storymain'>
            <div className='story1'>
                <h1 className='storyh1'>Specs and Traits.</h1>
                <ul className='storylist'>
                    <li>The purchase price of Moose will be 0.088ETH + gas fee.</li>
                    <li className='li2'>There will be 2222 Female Moose and 6666 Male Moose. Each Moose is <br/>custom-designed and developed with distinct characteristics.</li>
                    <li className='li3'>Every Moose is unique and algorithmically generated from more than <br/>200 possible traits! We specifically choose all 8 groups of traits:<br/> Background, Eyes, Mouth, Head, Fur, Clothes, Antlers, and Accessories.</li>
                    <li className='li4'>Some of them are rarer than the other, with 10 commanders being 1/1 <br/> with unique traits that cannot be found in others.</li>
                    <li className='li5'>By purchasing a Moose, you become a member of the Country Club. <br/> You will not only have beautiful fine art but as well all creative and commercial rights. </li>
                    <li className='li6'>By being a member of Country Club you will have access to soooo <br/> many benefits and exclusive giveaways.</li>
                    <li className='li7'>We will be revealing the special utility that would bring so much value <br/>and make us unique in the sea of PFP NFT projects. Become a member <br/> and stay tuned to find out. You will not regret it! We promise.</li>

                </ul>
            </div>
            <div className='story2'>
                <img className='horses' src={storypic} alt='picturehorse' />

            </div>
        </div>
    )
}

export default Stories