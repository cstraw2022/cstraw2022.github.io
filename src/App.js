
import React from 'react';
import './App.css';
import { Blurb } from './Blurb';
import { Extra } from './Extra';
import { More } from './More';
import { Projects } from './Projects';
import { Sidebar } from './Sidebar';
import * as Scroll from 'react-scroll';
import Background from './Background';

const Link = Scroll.Link;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidebar />
        <body>
          <div style={{ marginLeft: '50%', zIndex:'4',paddingRight:'10px'}}>
            <Blurb />
            <Projects />
            <Extra />
            <More />
          </div>
        </body>
      </header>
    </div>
  );
}

export default App;
