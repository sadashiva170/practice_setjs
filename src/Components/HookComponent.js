import React,{useState} from 'react'

function HookComponent() {
    const [count,setCount]=useState(0)
function incrementFive(){
  for(let i=0;i<10;i++){
    // setCount(count+1)//does not work for incrementing 
    setCount(prevCount=>prevCount+1)// works 

  }
}


  return (
    <div>
       count-{count}<br></br>
      <button onClick={()=>setCount(0)} >Reset</button>
      <button onClick={()=>setCount(count+1)} >Increment</button>
      <button onClick={()=>setCount(count-1)} >Decrement</button>
      <button onClick={incrementFive} >Increment 5</button>
    </div>
  )
}

export default HookComponent
