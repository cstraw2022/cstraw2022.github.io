import React, { useState } from 'react';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import * as Scroll from 'react-scroll';
import linkedin from './linkedin.svg';

const Link = Scroll.Link;

export function Sidebar() {
  const [activeButton, setActiveButton] = useState(null);
  const [subButtons, setSubButtons] = useState({
    About: [],
    Research: ['Algorithm Optimizations for Toric IOL Surgery', 'Glyph-Aware Inpainting', 'BioBERT Simplification'],
    Personal: ['Kanji a Day',"PKMN Showdown Mobile Websocket Client"],
    Activities: [],
  });

  const handleSetActive = (to) => {
    setActiveButton(to);

  };

  const buttonData = [
    { id: 'About', label: 'About' },
    { id: 'Research', label: 'Research Projects' },
    { id: 'Personal', label: 'Personal Projects' },
    { id: 'Activities', label: 'Activities' },
  ];

  return (
    <div className="Sidebar">
      <h1 className='Name'>Chris Straw</h1>
      <TypeAnimation
        sequence={[
          'Experience with Javascript',
          1500,
          'Experience with TypeScript',
          1500,
          'Experience with Swift',
          1500,
          'Experience with Kotlin',
          1500,
          'Experience with C++',
          1500,
          'Experience with TensorFlow',
          1500,
          'Experience with PyTorch',
          1500,
          'Experience with CLIPEncoders',
          1500,
          'Experience with CUDA',
          1500,
          'Experience with AWS',
          1500,
          'Experience with Docker',
          1500,

        ]}
        repeat={Infinity}
      />
      <br /><br />
      {buttonData.map(({ id, label }) => (
        <div key={id}>
          <Link
            to={id}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={
              () => handleSetActive(id)}
          >
            <button
              className={`jump-button ${activeButton === id ? 'active-button' : ''}`}
              onClick={() => setTimeout(function(){
                handleSetActive(id)
            }, 500)}
            >
              {label}
            </button>
          </Link>
          {activeButton === id && (
            <div className="sub-button-container">
              {subButtons[id].map((subButton) => (
                <Link
                  key={subButton}
                  to={subButton}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button className="sub-button">
                    {subButton}
                  </button>
                  <br />
                </Link>
              ))}
            </div>
          )}
        </div>

      ))}
      <a href="https://www.linkedin.com/in/cstraw/" target="_blank" rel="noopener noreferrer" fill="white">
        <img src={linkedin} alt="icon" className="sidebar-icon" />
      </a>
    </div>
  );
}
