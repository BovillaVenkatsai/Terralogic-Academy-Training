import { log } from "console";
import React,{useState,useEffect} from "react";

const FunctionalLifeCycle: React.FC=()=>{
    const[count,setCount]=useState<number>(0);

    useEffect(()=>{
        console.log("Component Mounted");

        return() =>{
            console.log("Component Unmounted");
        };
    },[]);
    useEffect(()=>{
        console.log("component updated:count changed to",count);
    },[count]);

    return(
        <div>
            <h2>Functional Lifecycle Demo</h2>
            <p>Count:{count}</p>
            <button onClick={()=> setCount(count +1)}>Increment </button>
        </div>
    );
}
export default FunctionalLifeCycle