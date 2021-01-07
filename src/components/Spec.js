import React from "react";

const Spec = () => {
  return (
    <div className='spec'>
      <div className='spec-inner'>
        <div className='spec-header'>
          <h5>
            Giulia QV Specifications
          </h5>
        </div>
        <ul>
          <li>
            <div className='spec-label'>Engine</div>
            <div className='spec-content red'>2.9 L DOHC V6</div>
          </li>
          <li>
            <div className='spec-label'>Layout</div>
            <div className='spec-content'>Front-engine, RWD</div>
          </li>
          <li>
            <div className='spec-label'>Max power</div>
            <div className='spec-content'>505 HP @6500 rpm</div>
          </li>
          <li>
            <div className='spec-label'>Peak torque</div>
            <div className='spec-content'>600 Nm @2500-5500 rpm</div>
          </li>
          <li>
            <div className='spec-label'>Top speed</div>
            <div className='spec-content'>307 km/h</div>
          </li>
          <li>
            <div className='spec-label'>0-100 km/h</div>
            <div className='spec-content'>3.8 s</div>
          </li>
          <li>
            <div className='spec-label'>EPA fuel economy combined</div>
            <div className='spec-content'>12L/100km</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Spec;
