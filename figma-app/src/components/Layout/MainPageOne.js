import React from 'react'
import '../../style/MainPageStyle.css'; 

 const MainPageOne = () =>{

   const ManEmoji = '/images/manemoji.png';
  return (
    <div className='mainpage-1'>

      <div className='left'>
        <div className='col-A'>We build brands with values and <br/>designed experience</div> 
        <div className='col-B'>Get brand deals and sponsors at <span className='boldpart'> 0% commission </span>for your content.</div>
        <div className='col-C'> 
           <img src={ManEmoji} alt='/'/>
        </div>
      </div>

      <div className='right'>
        <div className='rightBox'>
        <div className='col-D'>
          <div className='row-A'>Portfolio caretaker</div>
          <div className='row-B'>When we are there, no need to worry about managing your portfolios and representations. We believe every artist and influencer should spend the majority of their time creating effective content and engagements. Brocast will take care of your portfolio throughout the association and which will make it easy to attract more brands to the association.</div>

        </div>
        <div className='col-E'>
          <div className='row-C'>Influencer outreach</div>
          <div className='row-D'>We are the first and only associates who connect Nano and micro-influencers to well-known brands at 0% commission model. Yes !! you heard right, now monetize your content without giving any commission to any agency. Now be the face of well-known brands by 100% transparency.</div>
        </div>
        </div>
        
      </div>
    </div>
  )
}
export default MainPageOne;