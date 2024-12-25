import React from 'react';
import '../../style/MainPageTwoStyle.css';

import CommonLink from './CommonLink';

const MainPageTwo = () => {
  const manImage = '/images/manImage.png';
  
  return (
    <div className='mainpage-2'>
      <div className='Rowone'>
        <div className='row-one'>Meet the team</div>
        <div className='row-two'>
          We bring a wealth of skills and experience from a wide range of backgrounds.
        </div>
      </div>
      <div className='Rowtwo'>
        <div className='leftone'>
          <div className='row-three'>
            <img src={manImage} alt='Arjit Singh' />
            <div className='rowA'>
              <div className='name'>Arjit Singh</div>
              <div className='item-one'>Co-founder and CEO</div>
              <div className='item-2'>
              <CommonLink color="blue" 
              height="50px"
              width= "250px"
              display= "flex"
              justifyContent="center" 
              alignItems= "center"
              gap=" 15px" 
              /> 
              </div>
            </div>
          </div>
        </div>
        <div className='rightone'>
          <div className='rowB'>Arjit Singh</div>
          <div className='rowC'>Co-founder and CEO</div>
          <div className='rowD'>
            Arjit built his whole career closely understanding the marketing and brand psychology 
            behind some of the well-known Startups of India. Most recently he has co-founded his 
            own travel tech company, making it a well-known solution provider in the Indian travel 
            sector. Before that, he has working experience with 2 big unicorns of India and numerous 
            startups as a marketing consultant.
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MainPageTwo;
