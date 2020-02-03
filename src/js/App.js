import React from 'react';
import '../css/App.css';

import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
      </div>
      <div className="App-content">
        <About></About>
        <Resume></Resume>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;