import React from 'react';
import Pdf from './Components/PDF/Pdf'
 import resume from './resume.pdf'
import './App.css';

function App() {
   
  return (
    <div className="App">
    <h4>Bishop Resume</h4>
    <div className ='resume'>
    <Pdf pdf={resume} />
    </div>

    <hr />

    <h4>Hire Me</h4>
    

    <hr />
  </div>
  );
}

export default App;
