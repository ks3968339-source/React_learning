import React from 'react'
import { useNavigate } from 'react-router-dom'
const Nav2 = () => {
    const Navigate=useNavigate()
  return (
    <div className="py-3 px-5 bg-cyan-700">
       <button onClick={()=>{
            Navigate('/')
        }} className="bg-emerald-700 mr-2 px-5 py-2 rounded cursor-pointer active:scale-95">Return to Home </button>

        <button onClick={()=>{
            Navigate(-1)
        }} className="bg-emerald-700 px-5 py-2 rounded cursor-pointer active:scale-95">back </button>
      <h1>About</h1>
    </div>
  )
}

export default Nav2
