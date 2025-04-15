
import React from 'react';
import './App.css';
import { About } from './About';
import { Personal } from './Personal';
import { Activities } from './Activities';
import { Research } from './Research';
import { Sidebar } from './Sidebar';

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
