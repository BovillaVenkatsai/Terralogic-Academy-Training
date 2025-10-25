// import React from 'react'

// export const DataBindingComponent = () => {
//   return (
//     <div>DataBindingComponent
//         <input type="text"   />
//     </div>
//   )
// }
// export default DataBindingComponent 


import React, { useState } from "react";
const DataBinding=()=>{
    const[inputVal,setInputVal]=useState<string>('')
    const[password,setPassword]=useState('')
    const submitHandler=(e:any)=>{
        e.preventDefault();
        console.log('submitting:',inputVal)
        console.log('subbmitting password:',password);
    }
    const handleType=(e:any)=>{
        setInputVal(e.target.value)
        // console.log('typed character:',e.target.value);   
    }
    const handlePassword=(e:any)=>{
        setPassword(e.target.value)
    }

    return(
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter your Name" value ={inputVal} onChange={handleType}/>
            <input type="password" placeholder="Enter your password" value={password} onChange={handlePassword}/>
            <button>Submit</button>
            </form>
    )
}
export default DataBinding