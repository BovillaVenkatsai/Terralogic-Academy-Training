import Counter from "./Incrementcomponent";

function ButtonCheckComponent(){
    const handleClick = () => {
        alert('Button was clicked!');
    };

    return(
        <div style={{display:"flex",flex:'flex-direction-column',justifyContent:"center",alignItems:"center" ,height:"50vh"}}>
            <button className="button-check" style={{padding:'100px',backgroundColor:'blue',color:"white"}} onClick={handleClick}>
            <p style={{color:"red",fontFamily:"fantasy",fontWeight:"bold",fontSize:'30'}}>Click Me</p>
        </button>
        </div>
    );
}

export default ButtonCheckComponent;