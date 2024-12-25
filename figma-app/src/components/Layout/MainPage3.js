import React from 'react';
import '../../style/MainPage3Style.css';

const MainPage3 = () => {
  const manEmoji1='/images/manemoji1.png'
  return (
   <div className='main-3'>
    <div className='item1' >
        <div className='one-row'>Our Thoughts</div>
        <div className='two-row'>We are market explorers, because the best way to optimize your campaigns is understanding audiences.</div>
    </div>
    <div className='item2'>
      <img src={manEmoji1} alt='/'/>
    </div>
    
   </div>
   
  );
};

export default MainPage3;
