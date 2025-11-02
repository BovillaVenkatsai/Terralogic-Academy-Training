import React,{useState} from "react";
const FormWithErrors=()=>{
    const[formData,setFormData]=useState({name:"",email:""});
    const[errors,setErrors]=useState({});
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }));
    };
    //validate form inputs
    const validate=()=>{
        let tempErrors={};
        if(!formData.name.trim()) tempErrors.name="Name is Required.";
        if(!formData.email.trim()) tempErrors.email="Email is Required.";
        else if(!/\S+@\S+\.\S+/.test(formData.email))
            tempErrors.email="Enter a valid email.";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length ===0;
    };
    //handle form submission
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate()){
            console.log("Form is valid:",formData);
            alert("Form submitted sucessfully!");
            setFormData({name:"",email:""}); //reset after submission
            setErrors({});
            
        }
    };
    return(
        <form
        onSubmit={handleSubmit}
        style={{maxWidth:300,margin:"20px auto"}}
        >
            <div style={{marginBottom:10}}>
                <label>Name:</label>
                <br />
                <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={{width:"100%",padding:5}}
                />
                {errors.name && <p style={{color:"blueviolet"}}>{errors.name}</p>}
            </div>

            <div style={{marginBottom:10}}>
                <label>Email</label>
                <br />
                <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                style={{width:"100%",padding:5}}
                />
                {errors.email && <p style={{color:"blue"}}>{errors.email}</p>}
            </div>
            <button type="submit" style={{padding:"6px 12px"}}>
                Submit
            </button>
            
        </form>
    )
};
export default FormWithErrors