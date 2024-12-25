import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const CommonLink = ({ color, fontSize, height, width, backgroundColor, display, justifyContent, alignItems, gap }) => {
  return (
    <div
      className="item-2"
      style={{
        backgroundColor,
        height,
        width,
        display,
        justifyContent,
        alignItems,
        gap,
        color,
        fontSize
        
      }}
    >
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color }}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color }}>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" style={{ color }}>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
};

export default CommonLink;
