import * as React from "react";
import "../styles/Homestyles.css";
import Header from "../components/dashboardheader";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
    
      <div
        className="nameofcompany"
        animate={{ scale: 2 }}
        transition={{ duration: 1 }}
      >
        
        <label>GAYATRI COTTON INDUSTRIES</label>
      </div>
      
        <div className="containerr">

        {/* PurchaseBox */}

          <div
            className="PurchaseBox"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={"purchaselogo"} />
            <Link to="/purchase">
            <div className="purText text1">
              <label>PURACHASE</label>
            </div> </Link>
          </div>
       

        {/* produactionBox */}

        <div
          className="ProductionBox"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className={"productionlogo"} />
          <Link to="/production">
          <div className="purText">
            <label>PRODUCTION</label>
          </div>
          </Link>
        </div>

        {/* sellingBox */}

        <div
          className="sellingBox"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className={"sellinglogo"} />
          <Link to="/selling">
          <div className="purText text3">
            <label>SELLING</label>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
