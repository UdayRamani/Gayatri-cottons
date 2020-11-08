import React, { useEffect, useState } from "react";
import EditPurchaseData from "../components/EditPurchaseData";
import { db } from "../config/fire";
import "../styles/Purchase.css";
function EditDataPurchase(props) {
  const [PurchaseEdit, setPurchaseEdit] = useState([]);
  const [PurchaseId, setPurchaseID] = useState("");
  var uday = props.match.params.id;
  useEffect(() => {
    db.collection("Purchase")
      .doc(uday)
      .get()
      .then((doc) => {
        if (doc && doc.exists) {
          const mydata = [doc.data()];
          const myId = doc.id;
          console.log(doc.id, "=>", doc.data());
          setPurchaseEdit(mydata);
          setPurchaseID(myId);
        }
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
    return () => {};
  }, []);
  console.log(PurchaseId);
  return (
    <div>
      {PurchaseEdit.map((Puechases) => (
        <div>
          <EditPurchaseData Purchases={Puechases} PurchaseID={PurchaseId} />;
        </div>
      ))}
    </div>
  );
}
export default EditDataPurchase;
