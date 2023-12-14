import React,{useState,useEffect} from 'react'

function HookInterval() {
    const [count,setcount]=useState(0)
    const Tick=()=>{
        //setcount((prevcount)=>prevcount+1)
        setcount(count+1)
    }
    useEffect(()=>{
        console.log("count is incrementing everytime")
        const interval=setInterval(Tick,1000)
        return()=>(
            clearInterval(interval)
        )
    },[count])
  return (
    <div>
      <h1>Numbers are counting-{count}</h1>
    </div>
  )
}

export default HookInterval
