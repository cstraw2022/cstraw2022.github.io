
import React from 'react';
import './App.css';
import { About } from './components/About';
import { Personal } from './components/Personal';
import { Activities } from './components/Activities';
import { Research } from './components/Research';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidebar />
        <body>
          <div style={{ marginLeft: '50%', zIndex:'4',paddingRight:'10px'}}>
            <About />
            <Research />
            <Personal />
            <Activities />
          </div>
        </body>
      </header>
    </div>
  );
}

export default App;
