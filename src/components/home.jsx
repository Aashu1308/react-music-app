import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    const navigate = useNavigate();

    const handleLogOut = (e) =>{
        e.preventDefault();
        sessionStorage.removeItem('loggedInUser');
        navigate("/");
    }

    const goHome = (e) =>{
        e.preventDefault();
        navigate("/");
    }
    
    if(!loggedInUser){
        return (
        <>
            <h2>You must be logged in to access this page!</h2>
            <br></br>
            <button type='goHome' onClick={ goHome } >
            Log In
            </button>
        </>) 
    }
       
    else{
        return(
            <>
          <div className="card">
            <h1>Home</h1>
            <p>Welcome {loggedInUser.username} !</p>
            <br></br>
            <button type='logout' onClick={handleLogOut} >Log Out</button><br></br>
          </div>
            </>
        )
    }
}

export default Home;