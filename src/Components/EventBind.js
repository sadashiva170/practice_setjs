import react,{Component} from 'react';
class EventBind extends Component{
    constructor(){
        super()
        this.state={
            message:'Hi'
        }
        
    }
    clickHandlier(){
        this.setState({
            message:'Bye'
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandlier.bind(this)}> CLICK</button>
            </div>
        )
    }
}
export default EventBind;