import React, { useState } from "react";
import { Routes, Link} from "react-router-dom";

const Signup = () =>{
    const[email,setEmail]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const handleSignIn = async (e) => {
        e.preventDefault();
    
        try {
            const result = await fetch(
                'http://localhost:8080/',
                {
                    method: "POST",
                    body: JSON.stringify({ email, username, password }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            console.log('Response:', result); 
    
            const data = await result.json();
            console.warn(data);
            if (data) {
                alert("Data saved successfully");
                setEmail("");
                setUsername("");
                setPassword("");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    return(
        <>
        <h1>Sign Up</h1>
      <div className="card">
        <form>
        <p>Email ID: </p> <input type='text' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>    
        <p>Username: </p> <input type='text' id='uname' name='uname' value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <p>Password: </p> <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <br></br><br></br>
        <button type='submit' onClick={handleSignIn} >Sign Up</button><br></br>
        </form>
      </div>
        </>
    )
}

export default Signup;
