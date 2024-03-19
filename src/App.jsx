import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import Login from './components/login'
import Signup from './components/signup'


function App() {

  const [bkdata,Setbkdata] = useState([]);

  useEffect(() => {
    fetch("/")
      .then(response => response.json())
      .then(data => {
        Setbkdata(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
