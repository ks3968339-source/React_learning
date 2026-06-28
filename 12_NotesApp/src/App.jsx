import React, { useState } from 'react'

const App = () => {

   const[title,setTitle]=useState('')
   const[details,setDetail]=useState('')
   const[task,setTask]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    // console.log("Title of you Notes is :",title);
    // console.log(details)

    const copyTask=[...task] // task and copy task can have different values because they are differnt arrays and refer to different things in memory

    // here we push the data in form of object

    copyTask.push({title,details})
    setTask(copyTask)
    console.log(copyTask)

    //here what is happening is that we send our notes to copy task copy task sents it to task
    // ** IN COPYTASK OLD OBJECTS i.e OLD NOTES ALSO STAYS(BCZ AS YOU SUBMIT LINE NO.14 RUNS EVERYTIME) BUT TASK RESETS EVERYTIME 
  
    setTitle('')
    setDetail('')
  }
 
  const deleteNote=(idx)=>{ //we recive the idx sent to us by onClick function
    //we made copyTask because to use { setTask(copyTask)} if we do  setTask(Task) means we are passing same value
    const copyTask=[...task] //this is new copyTask not the old one
    copyTask.splice(idx,1) //it means which idx we press delete that will be deleted

    setTask(copyTask)
  }
 
  return (
    <div className="h-screen w-full lg:flex bg-black text-white " >
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 flex-col lg:w-1/2 items-start  p-10  '>

        <h1 className="text-3xl font-bold">Add Notes</h1>
        
        {/*Input for title */}
          <input 
        className="px-5 w-full font-medium] outline-none  py-2 border-2 rounded"
        type="text" 
        placeholder="Enter task heading" 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        {/*Text area for details */}
        
       <textarea 
       type="text" 
       className=" border-2 w-full font-medium outline-none h-32 px-5 py-2 rounded"
       placeholder='write Details'
       value={details}
       onChange={(e)=>{
        setDetail(e.target.value)
       }}
       />
       <button className='bg-white cursor-pointer active:bg-gray-2 00 active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'>Add Notes</button>
        
      </form>

      <div className="  lg:w-1/2 lg:border-l p-10">

        <h1 className="text-3xl font-bold">Recent Notes</h1>

       <div className="flex gap-5 h-[90%] overflow-auto flex-wrap mt-5">

      {task.map(function(elem,idx){ //this idx is which no note is this

        return  <div key={idx} className="h-52 flex justify-between flex-col relative w-40 rounded-2xl bg-cover bg-[url('https://imgs.search.brave.com/0Rf9sgH-EbFGluLmBlQMN98qNggmntOmSQHC_w0-VdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTAv/NzkzLzg3My9zbWFs/bC9hLWxpbmVkLW5v/dGUtcGFwZXItY292/ZXJlZC13aXRoLXRy/YW5zcGFyZW50LXRh/cGUtb24tYS15ZWxs/b3ctYmFja2dyb3Vu/ZC13aXRoLWEtd2hp/dGUtY2hlY2tlcmVk/LXBhdHRlcm4tZnJl/ZS1wbmcucG5n')] text-black p-3">
          <div>
          <h3 className="leading-tight text-xl font-bold pt-4 pl-4">{elem.title}</h3>
          <p className=" pl-2 mt-2 leading-tight font-medium text-gray-500">{elem.details}</p>
          </div>
          <button onClick={
            ()=>{
              deleteNote(idx)
            }
          } className="bg-red-500 cursor-pointer active:scale-95 w-full ml-1 text-white rounded font-bold text-xs">
            Delete
            </button>
        </div>
      })}

       </div>

      </div>

    </div>
  )
}

export default App
