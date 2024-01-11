import React,{useState} from 'react'

function HookRandom() {
    const [random,setrandom]=useState([])
const callrandom=()=>{
    setrandom([...random,{
        id:random.length,
        value:Math.floor(Math.random()*10)+1
    }])
}

  return (
    <div>
        <button onClick={callrandom}>Add random number</button>
        <ul>
            {
                random.map((item)=>(
                    <li key={item.id}> {item.value}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default HookRandom