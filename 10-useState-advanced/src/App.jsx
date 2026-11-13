import React, { useState } from 'react'

const App = () => {

    const [num,setNum] = useState({user:'Karan',age:20})
     
    // method 1 for obejct
    const btnClicked=()=>{
      const newNum={...num};
      newNum.user='Aman'
      newNum.age=24
      setNum(newNum)
    }

     // method 2 for obejct
    const [user,setUser]=useState({user:'Alfi',age:20})
    const changeAge=()=>{
      setUser(prev=>({...prev,age:21}))
       
    }

    // method  for array
    const [array,setArray]=useState([10,20,30])
    const changeArray=()=>{
        const NewArray=[...array]
        NewArray.push(99)
        setArray(NewArray)
    }


    // Batch update 
    const [value,setValue]=useState(10)
    const  btnClicker=()=>{
      setValue(prev=>(prev+1))
      setValue(prev=>(prev+1))
      setValue(prev=>(prev+1))  
    }

  return (
    <div>
        <h1>{num.user},{num.age}</h1>
        <button onClick={btnClicked}>Click</button>


        <h1>{user.user},{user.age}</h1>
        <button onClick={changeAge}>User</button>



        <h1>The value of array is : {array}</h1>
        <button onClick={changeArray}>change array</button>

        <h1>{value}</h1>
        <button onClick={btnClicker}> change value</button>
    </div>
  )
}

export default App
