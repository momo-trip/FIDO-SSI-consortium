import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate()

  const [inputText, setInputElement] = useState("");
  const [inputText1, setInputElement1] = useState("");
  
  return (
    <div>
    <p>Please enter your university account info.</p>
    <p>User ID: <input value={inputText} onChange={(e) => setInputElement(e.target.value)} type="text" placeholder="Your ID" /></p>
    <p>Password: <input value={inputText1} onChange={(e) => setInputElement1(e.target.value)} type="text" placeholder="Your password" /></p>
    <Link to={"/Page2"} state={{ uniID: (inputText),  password: (inputText1)}}>
    <button>Send</button>
    </Link>
    </div>
  )
}

export default Home;