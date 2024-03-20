import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () =>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    function validateLogin(){
        return username=="abc" && password=="xyz";
    }

    const handleLogin = async(e) =>{
      e.preventDefault()
      if(validateLogin()) alert("Logged In Successfully!");
      else alert("Invalid Username or Password.");
    }
    
    return(
        <>
        <h1>Login</h1>
      <div className="card">
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
