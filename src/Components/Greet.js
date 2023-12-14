import React from "react";
// export const Greet=(props)=>{
//     console.log(props)
//     return(
//         <div>
//         <h1> Hello {props.name} company={props.company} </h1>
//         {props.children}
//         </div>
//     )     
// }

//destructurning the above function in 1st way
export const Greet=({name,company})=>{
return(
    <div>
    <h1> Hello {name} company={company} </h1>
    {/* {props.children} */}
    </div>
)     
}

//destructurning the above function in 2nd way
// export const Greet=(props)=>{
//     const {name,company}=props
//     return(
//         <div>
//         <h1> Hello {name} company={company} </h1>
//         {props.children}
//         </div>
//     )     
// }



    
//export default Greet
