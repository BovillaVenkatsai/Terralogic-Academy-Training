import React,{useState} from "react";
function Counter(){
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    };
    const decreament=()=>{
        // if(count>0)
        // setCount(count>0?count-1:0);
        setCount(prev => Math.max(prev - 1, 0));
    }

    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={increment}>
                increment
                </button>
            <button onClick={decreament}>
                decreament
            </button>
        </div>
    )
}
export default Counter;