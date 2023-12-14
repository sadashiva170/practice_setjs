import React from "react";
 const FunctionClick=()=>{
  function clickHandlier(){
        console.log('Button clicked')
    }
    
    return(
        <div>
        <button onClick={clickHandlier}>click</button>
        </div>
    )     
}
export default FunctionClick;
