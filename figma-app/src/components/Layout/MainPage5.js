import React from 'react';
import '../../style/MainPage5Style.css';

const MainPage5 = () => {
  return (
    <div className="Main-5">
      <div className="row-nine">Ready to begin your journey?</div>
      <div className="row-ten">GET STARTED WITH BROCAST</div>
      <div className="row-eleven">
        <div className="Box">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="" />
        </div>
        <div className="Box">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="" />
        </div>
        <div className="Box">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="" />
        </div>
        
      </div>

      <div className='row-twelve'>
      <div className='Box-one'>
     < label htmlFor="phone">Phone Number</label>
      <input type="phone" id="phone" placeholder="" />
      </div>
      </div>

      <div className='row-thirteen'>
      <div className='Box-two'>
      <label htmlFor="message">Message</label>
      <input type="message" id="message" placeholder="" />
      </div>

      </div>
      
      <button>Submit</button>
    </div>
  );
};

export default MainPage5;
