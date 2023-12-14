import React,{Component} from "react"

class ClassClick extends Component{
     clickHandlier(){
        console.log('Button has clicked')
    }
    render(){
        return (
            <div>
            <button onClick={this.clickHandlier}>click Me</button>
            </div>
       
        )
    }
}
export default ClassClick;
