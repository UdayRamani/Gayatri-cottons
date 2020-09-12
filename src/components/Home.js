import * as React from "react";
import logo from "../logo1.png";
import "../styles/styles1.css";
import { motion } from "framer-motion";
import Header from "./dashboardheader";

function Home(handleLogout) {
 
  return (
    <div>
      <Header />
      <motion.div className="nameofcompany"  animate={{ scale: 2 }}
    transition={{ duration: 1 }}>
        <label>GAYATRI COTTON INDUSTRIES</label>
      </motion.div>
      <div className="containerr">
        <div className="PurchaseBox">
          <div className={"purchaselogo"} />
          <div className={"purText"}><label>PURACHASE</label></div>
        </div>

        <div className="ProductionBox">
          <div className={"productionlogo"} />
          <div className={"purText"}><label>PRODUCTION</label></div>
        </div>

        <div className="sellingBox">
          <div className={"sellinglogo"} />
          <div className={"purText text3"}><label>SELLING</label></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
