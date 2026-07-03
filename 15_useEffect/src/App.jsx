import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
 const[a,setA]= useState(0);
 const[b,setB]= useState(0);

  function achange(){
    console.log("value of a changed"); 
  }
  function bchange(){
    console.log("value of b changed"); 
  }
  useEffect(function(){
    achange();
    console.log("use effect is running ...")
  },[a])

  useEffect(function(){
    bchange();
    console.log("use effect is running ...")
  },[b])

  return (
    <div>
      <h1>value of A={a}</h1>
      <h1>value of B={b}</h1>
      <button onClick={()=>{
        setA(a+1);
      }}>change A</button>

      <button onClick={()=>{
        setB(b-1);
      }}>change B</button>
    </div>
  )
}

export default App
