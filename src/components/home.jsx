import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () =>{
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const handleLogOut = (e) =>{
        e.preventDefault();
        sessionStorage.removeItem('loggedInUser');
        navigate("/");
    }

    const goHome = (e) =>{
        e.preventDefault();
        navigate("/");
    }

    const handleClick = (e) =>{
        setIsOpen((isOpen)=>true);
        console.log("clicked");
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
            <p><a target='_blank' rel='noopener noreferrer' onClick={handleClick} href='https://forms.gle/5xU8JNDAq8fR8REC6'>Take a quick Survey!</a></p>
            <br></br>
            {isOpen && <a href='http://localhost:3000'>Go to recommendations</a>}
            <br></br>
            <br></br>
            <button className ='logout' type='logout' onClick={handleLogOut} >Log Out</button><br></br>
          </div>
            </>
        )
    }
}

export default Home;