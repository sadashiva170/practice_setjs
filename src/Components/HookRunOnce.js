import React,{useState,useEffect} from 'react'

function HookRunOnce() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMousePosition=event=>{
        console.log("mouse event")
        setX(event.clientX)
        setY(event.clientY)
    }
    useEffect(()=>{
        console.log("effect is updating")
        window.addEventListener('mousemove ',logMousePosition)
    },[])
  return (
    <div>
      Hook x-{x},Hook y-{y}
    </div>
  )
}

export default HookRunOnce
