import React ,{useState ,useEffect}from "react";
import { db } from "../config/fire";
import { Button } from "react-bootstrap";
import { Printer } from "react-bootstrap-icons";
import "../styles/Showpurchase.css";


function DaletedataPurchase({ Purchase  })
 {
  const onDelete = (e) => {
    e.preventDefault();
    db.collection("Purchase").doc(Purchase.id).delete()
  };

//Delete Data

  return (
    <div >
      <form>
        <div className="dataweightBox">  
        <Button onClick={onDelete} className="deleteBtn">DELETE</Button>
        </div>

      </form>
    </div>
  );
}
export default DaletedataPurchase;
