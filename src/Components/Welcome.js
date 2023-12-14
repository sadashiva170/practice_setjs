// import react,{Component} from 'react';
// class Welcome extends Component{
//     constructor(){
//         super()
//         this.state={
//             message:'Welcome friends'
//         }
        
//     }
//     changeMessage(){
//         this.setState({
//             message:'Thanks for subcribing'
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick={()=>this.changeMessage()}> subsribe</button>
//             </div>
//         )
//     }
// }
// export default Welcome;
// import React, { useState } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }
import React from 'react';

function Greet(props) {
  return <p>Hello, {props.name}!</p>;
}

export default function App() {
  return <Greet name="John" />;
}

