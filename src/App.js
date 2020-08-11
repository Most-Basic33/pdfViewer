import React from 'react';
import Pdf from './Components/PDF/Pdf'
 import resume from './resume.pdf'
import './App.css';

function App() {
   
  return (
    <div className="App">
    <h4>Bishop Resume</h4>
    <Pdf pdf={resume} />

    <hr />

    <h4>Hire Me</h4>
    <div className="all-page-container">
      
    </div>

    <hr />
  </div>
  );
}

export default App;
