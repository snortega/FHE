import React, { useState,useEffect } from 'react'
import "./Catalog.css"
import bed from './bed.png';
import chair from './chair.png';
import couch from './couch.png';
import ctable from './ctable.png';
import desk from './desk.png';
import dresser from './dresser.png';
import lamp from './lamp.png';
import mirror from './mirror.png';
import shelf from './shelf.png';
import table from './table.png';

const Catalog = () => {

  const [username, setUsername] = useState('');
  const [cart, setCart] = useState([]);

  const getUsername = async () => {
    const user = localStorage.getItem("username");
    setUsername(user);
  };

 const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart')
  }

  function getPrices(target) {
    switch (target.alt) {
      case "Bed with Frame":
        return 1000;
      case "Chair":
        return 150;
      case "Couch":
        return 450;
      case "Coffee Table":
        return 150;
      case "Desk with Drawer":
        return 500;
      case "Dresser":
        return 400;
      case "Standing Lamp":
        return 50;
      case "Full-Length Mirror":
        return 50;
      case "Shelf":
        return 100;
      case "Table":
        return 200;
      default:
        return 0;
    }
  }

  const addItem = (event) => {
    const itemName = event.target.alt;
    const updatedCart = [...cart];

    updatedCart.push({
      id: itemName,
      price: getPrices(event.target),
    });

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    clearCart();
    getUsername();  
  }, []);


  return (
    
    <div className="catalog-container">
    
      <div className="catalogheader">
        <h1>Catalog</h1>
        <h2>{username}</h2>
      </div>

      <div className="catalog-image-container">
      <img src={bed} alt = "Bed with Frame" onClick={addItem}/>
      <img src={chair} alt = "Chair" onClick={addItem}/>
      <img src={couch} alt = "Couch" onClick={addItem}/>
      <img src={ctable} alt = "Coffee Table" onClick={addItem}/>
      <img src={desk} alt = "Desk with Drawer" onClick={addItem}/>
      <p> Bed with Frame <br></br> $1000</p>
      <p> Chair <br></br> $150</p>
      <p> Couch <br></br> $450</p>
      <p> Coffee Table <br></br> $150</p>
      <p> Desk with Drawer <br></br> $500</p>
      <img src={dresser} alt = "Dresser" onClick={addItem}/>
      <img src={lamp} alt = "Standing Lamp" onClick={addItem}/>
      <img src={mirror} alt = "Full-Length Mirror" onClick={addItem}/>
      <img src={shelf} alt = "Shelf" onClick={addItem}/>
      <img src={table} alt = "Table" onClick={addItem}/>
      <p> Dresser <br></br> $400</p>
      <p> Standing Lamp <br></br> $50</p>
      <p> Full-Length Mirror <br></br> $50</p>
      <p> Shelf <br></br> $100</p>
      <p> Table <br></br> $200</p>
      </div>

      <div className ="catalogfooter">
        <div className = "catalog">
          <a href="http://localhost:3000/" style={{float:'right'}}><button>Logout</button></a>
          <a href="http://localhost:3000/confirm" style={{float:'right'}}><button>Checkout</button></a>
        </div>
      </div>
      
    </div>
  )
}

export default Catalog
