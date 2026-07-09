import React, { createContext } from 'react'

export const themeContextData=createContext()
const ThemeContext = (props) => {
  return (
    <div>
      <themeContextData.Provider value='Kushal '>
        {props.children}
      </themeContextData.Provider>
    </div>
  )
}

export default ThemeContext
