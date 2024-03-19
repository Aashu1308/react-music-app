import { useState } from "react";
import { Routes, Link } from "react-router-dom";

const Login = () =>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    function validateLogin(){
        return username=="abc" && password=="xyz";
    }
    return(
        <>
        <h1>Login</h1>
      <div className="card">
        <form>
        <p>Username: </p> <input type='text' id='uname' name='uname' value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <p>Password: </p> <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <br></br><br></br>
        <button type='submit' disabled={!validateLogin()}>Login</button><br></br>
        <p>If you haven't already ,  <Link to="/signup">Sign Up</Link></p>
        </form>
      </div>
        </>
    )
}

export default Login;
