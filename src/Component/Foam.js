// import React from 'react'
// import './Foam.css'
// import bgimg from './Images/Mint Bg.png'
// import rect from './Images/Rectangle 34.png'
// import line from './Images/Line 11.png'
// function Foam() {
//   return (
//     <div className='foam-main'>
//       <div className='image'>
//         <img className='bg-img' src={bgimg} alt='background' />
//       </div>
//       <div className='form'>
//         <img className='black' src={rect} alt='box' />
//         <h1 className='boxh1'>Mint your mooose.</h1>
//         <p className='boxp'>My balance: 0 ETH</p>
//         <p className='boxp2'>CONNECT WALLET</p>
//         <img className='lines' src={line} alt='linee' />
//         <div className='all'>
//           <div><p className='p3'>Amount to buy</p></div>
//           <div className='twoo'>
//             <p className='minus'>–</p>
//           <button className='bttn'>2</button>
//           <p className='plus'>+</p>
//           <p className='max'>Max</p>
         
//           </div>
//           <div><img className='lines1' src={line} alt='linee' /></div>
//         </div>
//         <div>
//           <p className='p2nd'>Price per token</p>
//           <p className='amm'>0.000 ETH</p>
//         </div>
//         <div><img className='lines2' src={line} alt='linee' /></div>
//         <div>
//           <p className='p3rd'>Total price</p>
//           <p className='amm1'>0.000 ETH</p>
//           <button className='mintbtn'>MINT</button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Foam;

// import React from 'react'
// import './Foam.css';

// function Foam() {
//   return (
//     <div className='amount'>
//         <div className='amount2'>
//             <div className='amount-form'>
//               <div className="level">
//               <h3>MINT YOUR MOUSE.</h3>
//              <div className='level-Flex'>
//                <h5>My balance: 0 ETH </h5>
//               <p>connect wallet</p></div>
//               </div>
//               <div className='buy'>
//                 <h3>Amount to buy</h3>
//                   <h5> -+ max</h5>
//               </div>
//               <div className='token'>
//                 <h5>Price per token</h5>
//                 <h6>0.000 ETH</h6>
//               </div>
//               <div className='total'>
//               <div className='token2'>
//                 <h5>Total price</h5>
//                 <h6>0.000 ETH</h6>
//               </div>  
//               <button>mint</button>      
//                     </div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Foam


















// import '../cssComponents/cart.css'
// import Team from '../sixth/Team'
import './Foam.css'
const Foam = () => {
    return(
        <div className='background'>
          <div className="pictures">
           <div className='cartt'>
            <h1 className='mint'>Mint your moose.</h1>
            <div className='balance'>
                <p className='my'>My balance: <span>0 ETH</span></p>
                <p className='wallet'>connect wallet</p>
               
            </div>
            <div className='amount'>
              <div className='amountSec'> 
                 <span className='buy'>Amount to buy</span>
                <span>-</span>
                <button className='btnn'>2</button>
                <span>+</span>
                <span className='max'>Max</span>
                </div>
            </div>
            <div className='price'>
               <div className='content'>
               <p className='token'>Price per token</p>
                <p className='eth'>0.000 ETH</p>
               </div>
            </div>
            <div className='total'>
                <div className='totalPrice'>
                    <p className='tp'>Total price</p>
                    <p className='eth'>0.000 ETH</p>
                </div>
            <div className='box'>Mint</div>
            </div>
           </div>
          </div>
          {/* <Team/> */}
        </div>
    )
}

export default Foam