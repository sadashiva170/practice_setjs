import React from 'react'

 function Person({value}) {
  return (
    <div>
      <h1>This is {value.name},and i am {value.age} years old,and i know {value.skill}</h1>
    </div>
  )
}
export default Person