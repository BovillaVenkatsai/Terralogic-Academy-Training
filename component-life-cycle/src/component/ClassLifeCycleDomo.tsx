import { count } from "console";
import React,{Component} from "react";
type IState={
    count:number;
};
type IProps={};
class LifecycleDemo extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={count:0};
        console.log("Constructor:Component is being created");
    }

    static getDerivedStateFromProps(props:any,state:any){
        console.log("getDerivedStateFromProps:Sync state with props if needed");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount: component mounted to DOM");
    }

    shouldComponentUpdate(nextProps:any,nextState:any){
        console.log("shouldComponentUpdate:","yes");
        return true;
    }
        getSnapshotBeforeUpdate(prevProps:any,prevState:any){
            console.log("getSnapshotBeforeUpdate:just before DOM is updated");
            return null;
        }
        componentDidUpdate(prevProps:any,prevState:any,snapshot:any){
            console.log("componentDidUpdate: Component updated");
        }

        componentWillUnmount() {
            console.log("componentWillUnmount:Component is being removed");
        }

        increment=()=>{
            this.setState({count:this.state.count + 1 });
        };
        decreament=()=>{
            this.setState({count:this.state.count - 1 });
        };
        render() {
    console.log("Render: Rendering component");
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decreament}>Decreament</button>
      </div>
    );
  }
}

export default LifecycleDemo;
