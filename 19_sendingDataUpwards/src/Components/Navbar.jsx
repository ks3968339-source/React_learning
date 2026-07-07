import React from 'react'

const Navbar = (props) => {
    function changeTheme(){
        if (props.theme=='light'){
        props.setTheme('Dark')
        }
        else{
           props.setTheme('light') 
        }
    }
  return (
    <div>
      <button onClick={changeTheme}>change Theme</button>
    </div>
  )
}

export default Navbar
