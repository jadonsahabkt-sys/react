import React from 'react'

const App = () => {
 
     
 localStorage.clear()
 sessionStorage.clear()

  localStorage.setItem('user','karan')
  localStorage.setItem('age',20)

  const user=  localStorage.getItem('user')
  const age=localStorage.getItem('age')
   console.log(user,age)

   sessionStorage.setItem('name','Karan Thakur')
   
 sessionStorage.removeItem('name') 



 // store item in the from of objects
 const student={
     username:'karan Singh',
     age:20,
     city:'Aligarh'
 }

 localStorage.setItem('student',JSON.stringify(student))    

 // get karne ke liye 

const std=JSON.parse(localStorage.getItem('student'))
   console.log(std)


  return (
    <div>
      App
    </div>
  )
}

export default App
