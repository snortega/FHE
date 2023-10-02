import React from 'react'
import "./Landing.css"

const Landing = () => {
  return (
    <div className="landing-container">

      <div className="text-container">
        <h1>Furniture Hub</h1>
      </div>
      
      <div className="landing-buttons">
        <a href="http://localhost:3000/login"><button >Login</button></a>
        <a href="http://localhost:3000/signup"><button>Signup</button></a>
      </div>

    </div>
  )
}

export default Landing
