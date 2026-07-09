import React, { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {

  const[theme,setTheme]=useState('light')
  return (
    <div>
      <Navbar theme={theme} >
        <h2>hello</h2>
        <h3>hi</h3>
      </Navbar>
    </div>
  )
}

export default App
