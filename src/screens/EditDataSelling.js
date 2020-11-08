import React, { useEffect, useState } from "react";
import EditSellingData from "../components/EditSellingData";
import { db } from "../config/fire";
import "../styles/Purchase.css";
function EditDataSelling(props) {
  const [SellingEdit, setSellingEdit] = useState([]);
  const [SellingId, setSellingId] = useState("");
  var uday = props.match.params.id;
  useEffect(() => {
    db.collection("Selling")
      .doc(uday)
      .get()
      .then((doc) => {
        if (doc && doc.exists) {
          const mydata = [doc.data()];
          const myId = doc.id;
          console.log(doc.id, "=>", doc.data());
          setSellingEdit(mydata);
          setSellingId(myId);
        }
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
    return () => {};
  }, []);
  console.log(SellingId);
  return (
    <div>
      {SellingEdit.map((sellings) => (
        <div>
          <EditSellingData Sellings={sellings} SellingID={SellingId} />;
        </div>
      ))}
    </div>
  );
}
export default EditDataSelling;
