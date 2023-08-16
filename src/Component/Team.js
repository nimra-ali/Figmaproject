import React from 'react'
import './Team.css'
import team1 from './Teamimage/Group 183.png'
import team2 from './Teamimage/Group 184.png'
import team3 from './Teamimage/Group 187.png'
import team4 from './Teamimage/Group 185.png'
import team5 from './Teamimage/Group 186.png'




function Team() {
  return (
    <div className='mainteam'>
<div className='workers'>
<div className='allteam'>
<h1 className='TEAMH1'>TEAM .</h1>
<p className='teamp'>Following our tremendous ambitions and plowing our wave through the vast universe of the NFT, we wanted to establish a 
practical,sustainable, and strong membership network, so that our community can embrace all of the benefits 
of being a member of our exclusive club. Meet the crew behind Meta Moose</p>
<div className='workersdetail'>
<img className='gigi' src={team1} alt='pic'/>
<img className='moose' src={team2} alt='pic'/>
<img className='hotmoose' src={team3} alt='pic'/>
<img className='jakeson' src={team4} alt='pic'/>
<img className='nana' src={team5} alt='pic'/>





</div>
</div>
</div>
    </div>
  )
}

export default Team