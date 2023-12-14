import React, { useState } from 'react'

function HookCounter() {
    const [name,setname]=useState({firstname:'',lastname:''})
    //event.tardet.value will update the state when an user update something in Ui
  return (
    <div>
    
        <br></br>
    <input type='text' placeholder='enter your firstname' value={name.firstname} onChange={(event)=>setname({...name,firstname:event.target.value})}/>
    <br/>
    <br/>
      <input type='text' placeholder='enter your lastname' value={name.lastname} onChange={(event)=>setname({...name,lastname:event.target.value})}/>

      <h1>your first name is {name.firstname}</h1>
      <h1>your last name is {name.lastname}</h1>
      <h1>{JSON.stringify(name)}</h1>


    </div>
  )
}

export default HookCounter
