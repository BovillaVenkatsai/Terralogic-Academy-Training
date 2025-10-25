// import ButtonCheckComponent from "./components/buttoncheck";
import ClassCounter from "./components/ClassComponent";
import Counterr from "./components/ClassComponent";
import DataBinding from "./components/DataBindingComponent";
// import { DataBindingComponent } from "./components/DataBindingComponent";
import Counter from "./components/Incrementcomponent";
import ParentComponent from "./components/ParentComponent";

const App=()=>{
  return(
    <>
    {/* <ButtonCheckComponent/> */}
    <Counter/>
    <ClassCounter/>
    {/* <DataBindingComponent/> */}
    <DataBinding/>
    <ParentComponent/>
    </>
  )
}
export default App