import React, { useState,useEffect } from 'react'
import "./Confirm.css"

const Confirm = () => {

  const [cart, setCart] = useState([]);
  const [tprice, setTprice] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  const purchase = async () => {    
      setSuccessMessage("Your purchase was confirmed!");

  }

  useEffect(() => {

    const savedData = localStorage.getItem('cart');

    if (savedData) {

      const parsedData = JSON.parse(savedData);

      const total = parsedData.reduce((total, currItem) => {return total + currItem.price;},0);
      setTprice(total);
      setCart(parsedData);
    }
  }, []);

  return (
    <div className="confirm-container">
    
      <div className="confirmheader">
        <h1>Confirmation</h1>
      </div>
      
      <div className = "confirmpage">
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.id} - {item.price}</li>
          ))}
        </ul>
        <p>Your total is: ${tprice}</p>
        <button onClick={purchase}>Confirm Purchase</button>
        {successMessage && <p style={{ color:"green",marginTop:'57vh'}}>{successMessage}</p>}
      </div>

      <div className ="confirmfooter">
        <div className = "confirm">
          <a href="http://localhost:3000/" style={{float:'right'}}><button>Logout</button></a>
          <a href="http://localhost:3000/catalog" style={{float:'right'}}><button>Continue Shopping</button></a>
        </div>
      </div>
    </div>
  )
}

export default Confirm
