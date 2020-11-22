import React, { useEffect, useState } from "react";
import "../styles/ShowDatevise.css";
import { db } from "../config/fire";
import moment from "moment";
import { Table } from "react-bootstrap";
function ShowDatevise({ Purchase }) {
  //Show Data
  const [DisData, setDisData] = useState([]);
  useEffect(() => {
    db.collection("Purchase")
      .doc(Purchase.id)
      .collection("DistributeAmount")
      .onSnapshot((snapshot) =>
        setDisData(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
    return () => {};
  }, []);

  return (
    <div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Farmer Name</th>
              <th>Amount</th>
              <th>Pay-Method</th>
              <th>Date</th>     
            </tr>
          </thead>
          <tbody>
            {DisData.map((Disdatas) => (
              <tr>
                <td>{Disdatas.data.farmerNamedis}</td>
                <td>{Disdatas.data.amountDis}</td>
                <td> {Disdatas.data.paymentDetailsdis}</td>     
                <td> {moment(new Date(Disdatas.data.paymentDatedis).toDateString()).format(
                    "DD-MM-YYYY"
                  )}</td>     
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default ShowDatevise;

// const [OutWeight, setoutWeight] = useState();
// const handleSetOutWeight = (e) => {
//   e.preventDefault();
//   db.collection("Purchase").doc(Purchase.id).update({
//     outweight: OutWeight,
//   });
//   setoutWeight("");
// };

{
  /* <form>
        <div className="dataweightBox">  
          <input
          placeholder={Purchase.data.outweight}
          value={OutWeight}
          className="inputOutWeight"
          onChange={(e) => setoutWeight(e.target.value)}
        />
        <button onClick={handleSetOutWeight} className="addweightbtn">Add</button>
        </div>

      </form> */
}
