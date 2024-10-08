import React from 'react';
import background from './components/background';
import foreground from './components/foreground';
function App() {
  return (
    <div className= 'relative w-full h-screen bg-zinc-700'> 
      <Background />
      <Foreground/>
    </div>
  )
}

export default App
