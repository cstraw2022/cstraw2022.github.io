import React, { useState } from 'react';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import * as Scroll from 'react-scroll';
const Link = Scroll.Link;

export function Sidebar() {
  const [activeButton, setActiveButton] = useState(null);
  const [subButtons, setSubButtons] = useState({
    Blurb: [],
    Projects: ['Kanji a Day', 'BioBERT Simplification', 'CloseUp','PokeMMO Mobile Client'],
    Extra: ['Sub7', 'Sub8', 'Sub9'],
    More: [],
  });

  const handleSetActive = (to) => {
    setActiveButton(to);
  };

  const buttonNames = ['Blurb', 'Projects', 'Extra', 'More'];

  return (
    <div className="Sidebar">
      <h1 className='Name'>Chris Straw</h1>
      <TypeAnimation
        sequence={[
          'Projects using Javascript',
          1500,
          'Projects using TypeScript',
          1000,
          // ... other sequences ...
          'Projects using GPT4',
          1000,
        ]}
        repeat={Infinity}
      />
      <br /><br />
      {buttonNames.map((buttonName) => (
        <div key={buttonName}>
          <Link
            to={buttonName}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleSetActive(buttonName)}
          >
            <button
              className={`jump-button ${activeButton === buttonName ? 'active-button' : ''}`}
            >
              {buttonName}
            </button>
          </Link>
          {activeButton === buttonName && (
            <div className="sub-button-container">
              {subButtons[buttonName].map((subButton) => (
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
                  <br></br>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
