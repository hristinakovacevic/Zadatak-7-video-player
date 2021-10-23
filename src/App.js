import React from 'react'
import ReactPlayer from 'react-player'

import './App.css'

function App() {
  return (
    <div className="App">
     <ReactPlayer controls url='video.mp4' width='480px' height='240px'/>
    </div>
  );
}

export default App;
