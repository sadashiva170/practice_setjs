import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(){
        super()
        this.state={
            isLogined:true
        }
    }
  render() {
    // if(this.state.isLogined){
    //     return( <div>
    //         <h1>Welcome user</h1>
    //         </div>
    //         )
    // }
    // else{
    //     return( <div>
    //         <h1>Hi user</h1>
    //         </div>
    //         )

    // }

    //alternate approach of is else using element variable
    // let message;
    // if(this.state.isLogined){
    //     message=( <div>
    //         <h1>Welcome user</h1>
    //         </div>
    //         )
    // }
    // else{
    //     message=( <div>
    //         <h1>Hi user</h1>
    //         </div>
    //         )

    // }
    // return <div>{message}</div>

    //using ternary conditional operator
    // return(
    //     this.state.isLogined ? <div>Welcome user</div>:<div>Hi user</div>
    // )

    //using short circuit
    return(
    this.state.isLogined && <div>Welcome user</div>
    )
  }
}

export default UserGreeting
