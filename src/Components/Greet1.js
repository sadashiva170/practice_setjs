import React,{Component} from "react";
// class Greet1 extends Component{
//     render(){
//         return <h1> Hello {this.props.name} company={this.props.company}</h1>
//     }
// }

//destructuring above function
class Greet1 extends Component{
   
    render(){
        const {name,company}=this.props
        return <h1> Hello {name} company={company}</h1>
    }
}
export default Greet1


