import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./login.css"

const Login = () =>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[userData,setUserData]=useState([]);
    const[loggedIn,setLoggedIn]=useState(false);

    useEffect(()=>{
      Axios.get('http://localhost:4000/api/userdata')
      .then((res)=>setUserData(res.data))
      .catch(error => console.error("Error fetching user data:", error));
    },[]);

    const handleLogin = (e) =>{
        e.preventDefault();
        const user = userData.find(user => user.username === username && user.password === password);

        if(user){
          setLoggedIn(true);
          alert("Logged In Successfully! Hello "+user.username+"!");
          setUsername("");
          setPassword("");
        }
        else{
          setLoggedIn(false);
          alert("Invalid Username or Password.");
          setUsername("");
          setPassword("");
        }
    }
    
    return(
        <>
      <div className="card">
        <h1>Login</h1>
        <form>
        <p>Username: </p> <input type='text' id='uname' name='uname' value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <p>Password: </p> <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <br></br><br></br>
        <button type='submit' onClick={handleLogin}>Login</button><br></br>
        <p>If you haven't already ,  <Link to="/signup">Sign Up</Link></p>
        </form>
      </div>
        </>
    )
}

export default Login;
