import React, { useContext } from 'react'
import Nav2 from './Nav2'
import {themeContextData} from '../Context/ThemeContext'

const Navbar = (props) => {
    const Data=useContext(themeContextData)
    console.log(Data)
  return (
    <div className="Nav">
      <h2>Kushal</h2>
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar
