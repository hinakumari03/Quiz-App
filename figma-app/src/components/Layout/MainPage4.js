import React from 'react';
import '../../style/MainPage4Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MainPage4 = () => {
  const handleClick = (colName) => {
    alert(`${colName} clicked!`);
  };
  return (
    <div className="Main-4">
      <div className="row-six">What else we do</div>
      <div className="row-seven">
      <div
          className="col-one"
          onClick={() => handleClick('Brand Stories')}
        >Brand Stories </div>
        <div
          className="col-two"
          onClick={() => handleClick('Content Generations')}
        >
          Content Generations
        </div>
        <div
          className="col-three"
          onClick={() => handleClick('E-commerce')}
        >
          E-commerce
        </div>
        <div
          className="col-four"
          onClick={() => handleClick('Production/Distribution')}
        >
          Production/Distribution
        </div>
        <div className="col-five">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      
      <div className="row-eight">Everyone one loves stories and everyone does connect with them. When it comes to disrupting brand stories and relatable brand vibe, we breathe for it, So,you are just atthe right place.</div>
    </div>
  );
};

export default MainPage4;
