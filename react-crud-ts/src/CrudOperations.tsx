import React,{useState} from "react";
import axiosClient from "./api/axiosClient";
import { User } from "./typess/User";

const CrudOperations = ()=>{
    const[users,setUsers]=useState<User[]>([]);
    const[formData,setFormData]=useState<User>({
        name:"",
        email:"",
        phone:"",
    });
    const[selectedId,setSelectedId]=useState<number | null>(null);

    //GET all users
    const handleFetchUsers=async ()=>{
        try{
            const res=await axiosClient.get<User[]>("/users");
            setUsers(res.data);
            console.log("Fetched users:",res.data);
        } catch(error){
            console.log("Error fetching users",error);
            
        }
    };
    // Post(ADD) user
    const handleAddUser=async()=>{
        try{
            const res=await axiosClient.post<User>("/users",formData);
            setUsers([...users,res.data]);
            console.log("user added:",res.data);
            setFormData({name:"",email:"",phone:""})
        } catch(err){
            console.log("Error adding user",err);
            
        }
    };

    //PUT (update)user
    const handleUpdateUSer=async ()=>{
        if(!selectedId) return alert("selected a user ID to updadate!");
        try{
            const res=await axiosClient.patch<User>(`/users/${selectedId}`,formData);
            setUsers(
                users.map((u)=>(u.id===selectedId?{...u,...formData}:u))
            );
            //setUsers(res.data)
            console.log("User updated:",res.data);
            setSelectedId(null);
            setFormData({name:"",email:"",phone:""});
        } catch(err){
            console.error("Error updating user",err);
        }
    };

    //Delete user
    const handleDeleteUser=async(id:number)=>{
        try{
            await axiosClient.delete(`users/${id}`);
            setUsers(users.filter((u)=>u.id !==id));
            console.log(`User with ID ${id} deleted`);
        } catch (err){
            console.error("Error deleting user",err);
        }
    };
    // Handle input changes
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    // Load user data into form for edit

    const handleEditClick=(user:User) =>{
        setSelectedId(user.id!);
        setFormData({name:user.name,email:user.email,phone:user.phone});
    };

    return(
        <div style={{padding:30}}>
            <h1> React + TypeScript CRUD (Axios)</h1>
            {/* CRUD BUTTONS*/}
            <div style={{marginBottom:20}}>
                <button onClick={handleFetchUsers}>Get All Users</button>
            </div>
            {/* Form*/}
            <div style={{display:"flex",gap:10,marginBottom:10}}>
                <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                />
                <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                />
                <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                />
                {/* selected id*/}
                {selectedId ? (
                    <button onClick={handleUpdateUSer}> Update User </button>
                ):(
                    <button onClick={handleAddUser}> Add User </button>
                )}
            </div>
            {/* User Table*/}
            {users.length > 0 && (
                <table border={1} cellPadding={8} style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u)=>(
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.phone}</td>
                                <td>
                                    <button onClick={()=> handleEditClick(u)}>Edit</button>
                                    <button onClick={()=> handleDeleteUser(u.id!)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CrudOperations;
