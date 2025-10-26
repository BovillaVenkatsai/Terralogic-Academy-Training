import React from "react";
type Iprops={
    isLogedIn:boolean;
    defaultProp?:boolean;
};
const Conditionalrendering=(props:Iprops)=>{
    const{isLogedIn,defaultProp="No Val From Parent"}=props;
    console.log("defaultProp",defaultProp);

    const checkIfUserHasAccount=(hasAccount:boolean)=>{
        if(hasAccount) return <h1>User Can login</h1>;
        return <h1>User Need to Register</h1>
    };
    return(
        <div>{isLogedIn ? <h1>Yes,Login</h1>:checkIfUserHasAccount(false)}</div>
    );
};
export default Conditionalrendering;