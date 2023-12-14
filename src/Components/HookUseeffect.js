import React, { useState,useEffect } from 'react'

function HookUseeffect() {
    const [count,setcount]=useState(0)
    const [name,setname]=useState('')
    useEffect(()=>{
      console.log('useffect-updating document title')

        document.title=`you are clicking ${count} times`
    },[count])

  return (
    <div>
      <input type='text' value={name} placeholder='enter your name here' onChange={(event)=>setname(event.target.value)}/>
        <button onClick={()=>setcount(count+1)}>Click {count}</button>
        
      
    </div>
  )
}

export default HookUseeffect
