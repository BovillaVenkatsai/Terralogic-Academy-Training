import { count } from 'console';
import React,{Component} from 'react';
class ClassCounter extends Component<{count?: number}  , {count : number}>{
    constructor(props:{count ?:number}){
        super(props);
        this.state={
            count:0,
        };
    }
    //increment
    increment=()=>{
        this.setState({count:this.state.count +  1});
    };
    //decreament
    decrement=()=>{
        this.setState({count:this.state.count - 1});
    };

    render(){
        return(
            <div style={{textAlign:'center',marginTop:'50px'}}>
                <h2>Counter:{this.state.count}</h2>
                <button onClick={this.increment}style={{marginRight:'10px'}}>
+
                </button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}
export default ClassCounter;