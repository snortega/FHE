import React from 'react'
import { useState } from 'react'
import "./Signup.css"

const Signup = () => {

  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {

      if (username != "" && password != "" && email != "") {
        setSuccessMessage("Sign up successful. You can now log in.");
        setErrorMessage("");
      } else {
        setSuccessMessage("");
        setErrorMessage("Sign up failed. Please check your information.");
      }

  }

  return (
    <div className="signup-container">

      <div className="left-bar">

        <h1>Create an Account</h1>

        <div className="labelbox">
          <label for="email">E-mail</label><br/>
          <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="labelbox">
          <label for="username">Username</label><br/>
          <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div className="labelbox">
          <label for="password" >Password</label><br/>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
       
        <div className="buttonsection">
        <button onClick={handleSubmit}>Sign Up</button>
        <a href="http://localhost:3000/"><button style={{}}> Back to Home</button></a>  
        </div>     

      </div>

    </div>
  )
}

export default Signup
