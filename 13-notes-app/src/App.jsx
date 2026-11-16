import React from 'react'
import { useState } from 'react'
import {X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('');

  const [task, setTask] = useState([]);

  const submitHandler=(e)=>{
    e.preventDefault()

    const copyTask=[...task];
    copyTask.push({title,detail})
    setTask(copyTask)
    console.log(task)

    console.log(title);
    console.log(detail)

    setTitle('')
    setDetail('')
  }
  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    
    setTask(copyTask)
  }
  

  return (

    <div className='h-screen bg-black text-white '>
       <form onSubmit={(e)=> {
        submitHandler(e)
       }} className='flex items-start justify-between gap-5 p-10'>

        <div className='flex w-1/2 gap-5  items-start flex-col' >
          <h1 className='text-3xl  font-bold '>Add notes</h1>

        {/* Pehla input for heading */}
        <input
         type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full py-3 font-medium border-2 rounded-2xl outline-none '
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
           />
        
         
        {/* Details Wala Inputs */}
        <textarea
         type="text"
          placeholder='Write details...'
           className='px-5 w-full font-medium  h-32 py-3 border-2 rounded-2xl outline-none'
           value={detail}
           onChange={(e)=>{
            setDetail(e.target.value)
           }}
          />


          <button
           className='bg-white text-black active:bg-gray-400 active:scale-95 font-medium w-full px-5 py-3 border-2 rounded-2xl outline-none'>
            Add Note
          </button>

      </div>
        <img className='h-60 rotate-y-180' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="Notes" />
       </form>

       <div className='m-10 '>
        <h1 className='text-3xl p-5 font-bold'>Recent notes</h1>
        <div className='flex flex-wrap p-10 gap-5 max-h-96 overflow-y-auto'>
            {task.map(function(elem,idx){

                 return  <div key={idx} className='relative h-52 w-40 rounded-2xl text-black p-9 bg-cover '
                   style={{
                             backgroundImage: "url('https://png.pngtree.com/png-clipart/20220424/original/pngtree-aesthetic-blank-paper-for-sticky-notes-png-image_7557379.png')"
                     }}>


                  <h2 onClick={()=>{
                    deleteNote(idx)
                    }} className='absolute top-8 right-1 active:bg-black active:scale-95 bg-amber-900 rounded-3xl'><X size={25} strokeWidth={1.75} /></h2>

                  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>

                  <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.detail}</p>
                 </div>
            })}

           
        </div>
       </div>
 </div>
  )
}

export default App
