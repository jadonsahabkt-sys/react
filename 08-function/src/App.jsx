import React from 'react'

const App = () => {

  function btnClicked() {
    console.log('Button is clicked.')
  }

  function btnClickeded() {
    console.log('Button is double clicked.')
  }
  function mouseEnter(){
    console.log('Mouse Entered');
  }

  function inputChanging(val){
        console.log(val);
   }    

   const pageSrolling =(elem)=>{
    if(elem>0){
      console.log('seedha scrolling..');
    }else{
      console.log('ulta scrolling..');
    }
    console.log('page is scrolling... at speed',elem);
   }

  return (
    <div>
      <h1>Hello Guys, I am Karan</h1>

      <button onMouseEnter={mouseEnter} onClick={btnClicked}>
        Change user single click
      </button>

      <br /><br />

      <button  onMouseEnter={mouseEnter} onClick={function(){
        console.log('hello Karan.');
      }}>
        explore
      </button>
       

      <br /><br />    

          
   
      <input
       onChange={(elem)=>{
        inputChanging(elem.target.value);
      }} type='text' placeholder='Enter name'/>

       
       <div>
        <div onMouseMove={(elem)=>{
          console.log('arrow enterd in box.')
          console.log(elem.clientX);
        }} className='box'></div>
       </div>

       <div onWheel={(elem)=>{
        pageSrolling(elem.deltaY)
       }}>
        <div className='page1'></div>
         <div className='page2'></div>
          <div className='page3'></div>
       </div>
         

    </div>
  )
}

export default App
