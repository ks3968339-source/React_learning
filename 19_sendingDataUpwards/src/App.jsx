import React, { useState } from 'react'
import Navbar from './Components/Navbar';

const App = () => {
  const[theme,setTheme]=useState('light');
  return (
    <div>
      <h1>theme of page is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
