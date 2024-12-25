import React, { useState } from 'react'; 
import '../../style/HeroStyle.css'; 

const HeroSection = () => {
  const heroImage = '/images/mountains-4563464_1280.jpg';
  const circleImage = '/images/circle.png';
  const tickImage = '/images/tick.png';
  const addImage = '/images/add.png';

  
  const [clients, setClients] = useState(220);
  const [projects, setProjects] = useState(220);
  const [satisfaction, setSatisfaction] = useState(220);

  
  const handleClick = (type) => {
    if (type === 'clients') setClients((prev) => prev + 1);
    if (type === 'projects') setProjects((prev) => prev + 1);
    if (type === 'satisfaction') setSatisfaction((prev) => prev + 1);
  };

  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className='row-1'>
        <div className='boxA'>Every Art, Idea, and innovation</div>
        <div className='boxB'>deserves an influential brand</div>
        <div className='boxC'>We work with empathy, for impact.</div>
        <div className='boxD'>LET’S COLLABORATE</div>
      </div>
      <div className='row-2'>
        <div className='col-1' onClick={() => handleClick('clients')}>
          <img src={circleImage} alt="/" />
          <div className='item-1'>No. of clients</div>
          <div className='number'>{clients}+</div>
        </div>

        <div className='col-2' onClick={() => handleClick('projects')}>
          <img src={tickImage} alt="/" />
          <div className='item-2'>Projects done</div>
          <div className='number'>{projects}+</div>
        </div>

        <div className='col-3' onClick={() => handleClick('satisfaction')}>
          <img src={addImage} alt="/" />
          <div className='item-3'>Satisfaction</div>
          <div className='number'>{satisfaction}+</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

