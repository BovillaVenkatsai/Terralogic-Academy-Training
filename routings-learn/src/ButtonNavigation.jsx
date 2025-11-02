import{useNavigate}from 'react-router-dom';
function ButtonNavigation(){
    const navigate=useNavigate();
    const handleSubmit=()=>{
        navigate('/success');
    }
    
    return(
    <form onSubmit={handleSubmit}>
        {/*...form inputs*/}
        <button type='submit'>Submit</button>
    </form>
)
};
export default ButtonNavigation