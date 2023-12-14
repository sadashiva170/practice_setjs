import React from 'react'
import Person from './Person'


function NameList() {
    // let arr=['purum','sada','shiva']
    const person=[
        {
            id:1,
            name:'sada',
            age:23,
            skill:'html'
        },
        {
            id:2,
            name:'shiva',
            age:23,
            skill:'css'
        },
        {
            id:2,
            name:'purum',
            age:23,
            skill:'html'
        },
    ]
    // let NameList=arr.map(value=><h2>{value}</h2>)
    let personList=person.map((value,index)=><Person key={index} value={value} />)
           
    // return <div>{NameList}</div>
    return <div>{personList}</div>
}

export default NameList
