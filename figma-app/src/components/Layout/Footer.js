import React from 'react';
import '../../style/FooterStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; 
import CommonLink from './CommonLink';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-box">
        <div className="title">Brocast</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo ac lobortis urna eget velit diam. Consectetur nisl at aliquam euismod tempus massa ipsum ac.
        </div>
        <div className="follow">Follow Us</div>

        <div className="item-2">
          <CommonLink
            color="white"
            height="30px"
            width="150px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          />
        </div>
      </div>

      <div className="row-14">
        <div className="col-20">
          <div className="col-21">New York, USA</div>
          <span className="font">
            <FontAwesomeIcon icon={faPhoneAlt} /> 
          </span>
          <div className="col-22">009-215-5596</div>
        </div>

        <div className="col-23">
          <div className='col-24'>1010 Grand Avenue</div>
          <div className='col-25'>Give us a call</div>
        </div>
      </div>

      <div className="row-15">
        Copyright © 2021 Codal Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
