import React from 'react'

const App = () => {
  
  const user={
    username:"Kushal sharma",
    age:"20",
    city:"Darjeeling",
    college:"Manipal University Jaipur",
    DOB:"12 Jan 2006"
  }
  localStorage.setItem('user',JSON.stringify(user));
  const userValue=JSON.parse(localStorage.getItem('user'))
  console.log(userValue);
  
  return (
    <div>
      App
    </div>
  )
}

export default App
