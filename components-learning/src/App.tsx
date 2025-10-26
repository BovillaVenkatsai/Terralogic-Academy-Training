// import ButtonCheckComponent from "./components/buttoncheck";
import ArrayTraversal from "./components/ArrayTraversal";
// import ClassCounter from "./components/ClassComponent";
// import Counterr from "./components/ClassComponent";
import Conditionalrendering from "./components/ConditionalRendering";
//import DataBinding from "./components/DataBindingComponent";
import Greeting from "./components/Greeting";
// import { DataBindingComponent } from "./components/DataBindingComponent";
//import Counter from "./components/Incrementcomponent";
//import ItemList from "./components/ListUsage";
//import ParentComponent from "./components/ParentComponent";
import WelcomeMessage from "./components/WelcomeMessage";

const App=()=>{
  return(
    <>
    {/* <ButtonCheckComponent/> */}
    {/* <Counter/>
    <ClassCounter/>}
    {/* <DataBindingComponent/> */}
    {/* <DataBinding/>
    <ParentComponent/> */}
    {/* <WelcomeMessage isLoggedIn={true}/>
    <WelcomeMessage isLoggedIn={false}/> }
    <Greeting isLoggedIn={true} isAuthorized={false} />
    <Conditionalrendering isLogedIn={false}/>
    {/* <ItemList/> */}
    <ArrayTraversal/>
</>
  );
}
export default App