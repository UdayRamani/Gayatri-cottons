import React, { useState, useEffect } from "react";
import { db } from "../config/fire";
import '../styles/Showpurchase.css'
import ShowDatevise from '../components/ShowDatevise'
import Header from '../components/Header.js'
function Showpurchase() {
    
  const [Purchase, setpurchase] = useState([]);
  useEffect(() => {
    db.collection("Purchase").onSnapshot((snapshot) =>
      setpurchase(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      )
    );
    return () => {};
  }, []);
  return (
      <div>
          <Header />
          <div className="text">Purchase Data</div>
        
    <div className="showPurchaseBox">
      {Purchase.map((purchases) => (
        
          <ShowDatevise 
          timestamp={purchases.data.date}
          date={purchases.data.trucknumber}/>
      ))}
    </div>
    </div>
  );
}

export default Showpurchase;
