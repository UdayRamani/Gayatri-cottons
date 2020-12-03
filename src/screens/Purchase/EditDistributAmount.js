import { Button, Pagination, Table } from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header";
import { db } from "../../config/fire";
import "../../styles/Purchase.css";
import moment from "moment";

function EditDistributAmount(props) {
  const [paymentDatedis, setpaymentDatedis] = useState("");
  const [farmernamedis, setfarmernamedis] = useState("");
  const [amountdis, setamountdis] = useState("");
  const [paymentdetailsdis, setpaymentdetailsdis] = useState("");
  const [checknumberdis, setchecknumberdis] = useState("");

  const [PurchaseEdit, setPurchaseEdit] = useState([]);
  const [PurchaseId, setPurchaseID] = useState("");

  const [DisData, setDisData] = useState([]);

  var uday = props.match.params.id;
  const handleSetOutWeight = (e) => {
    e.preventDefault();
    db.collection("Purchase").doc(uday).collection("DistributeAmount").add({
      paymentDatedis: paymentDatedis,
      farmerNamedis: farmernamedis,
      amountDis: amountdis,
      paymentDetailsdis: paymentdetailsdis,
      checkNumberdis: checknumberdis,
    });
    setpaymentDatedis("");
    setfarmernamedis("");
    setamountdis("");
    setpaymentdetailsdis("");
    setchecknumberdis("");
  };
 
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

 
    
  useEffect(() => {
    db.collection("Purchase")
      .doc(uday)
      .collection("DistributeAmount")
      .onSnapshot((snapshot) =>
        setDisData(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
    return () => {};
  }, []);
  function DeletedataDisAmount({ DisDelete }) {
    const onDelete = (e) => {
      e.preventDefault();
      db.collection("Purchase")
        .doc(uday)
        .collection("DistributeAmount")
        .doc(DisDelete.id)
        .delete();
    };
    return (
      <div>
        <form>
          <div className="dataweightBox">
            <Button onClick={onDelete} className="deleteBtn">
              DELETE
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="purchase">
        {/* {PurchaseEdit.map((purchases) => (
          <div className="headerdiss">
            DISTRUBUTE AMOUNT IS : {purchases.disamount}
          </div>
        ))} */}
        <div className="purchasefrom">
          <form>
            <label className="labletext">Add Date</label>
            <input
              type="date"
              className="inputitem"
              value={paymentDatedis}
              onChange={(e) => setpaymentDatedis(e.target.value)}
              required
            />
            <label className="labletext">Add FarmerName</label>
            <input
              type="text"
              className="inputitem"
              value={farmernamedis}
              onChange={(e) => setfarmernamedis(e.target.value)}
              placeholder="xcvdg"
              required
            />
            <label className="labletext">Add Amount</label>
            <input
              type="number"
              className="inputitem"
              placeholder="000000"
              value={amountdis}
              onChange={(e) => setamountdis(e.target.value)}
            />
            <label className="labletext">Add Payment-Method</label>
            <div className="paymentDetails">
              <input
                className="inputitempay"
                placeholder="Cheque,NEFT Or Cash"
                value={paymentdetailsdis}
                onChange={(e) => setpaymentdetailsdis(e.target.value)}
              />
              <input
                className="inputitempay"
                placeholder="Cheque Number"
                value={checknumberdis}
                onChange={(e) => setchecknumberdis(e.target.value)}
              />
            </div>
            <button
              type="submit"
              class="btn btn-outline-info"
              onClick={handleSetOutWeight}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="showPurchaseBoxessss">
        <Table responsive striped bordered hover>
          <thead className="bodytable">
            <tr>
              <th scope="col">
                <h5>Date</h5>{" "}
              </th>
              <th scope="col">
                <h6>Farmer-Name</h6>
              </th>
              <th scope="col">
                <h6>Amount</h6>
              </th>
              <th scope="col">
                <h6>Payment-Ditails</h6>
              </th>
              <th scope="col">
                <h6>Cheque-Number</h6>
              </th>
              <th scope="col">
                <h6>Opration</h6>
              </th>
            </tr>
          </thead>
          <tbody>
            {DisData.map((disdata) => (
              <tr>
               
                <td className="th">{ moment(new Date(disdata.data.paymentDatedis).toDateString()).format(
                    "DD-MM-YYYY")}</td>
                <td className="th">{disdata.data.farmerNamedis}</td>
                <td className="th">{disdata.data.amountDis}</td>
                <td className="th">{disdata.data.paymentDetailsdis}</td>
                <td className="th">{disdata.data.checkNumberdis}</td>
                <td className="th">
                  <DeletedataDisAmount DisDelete={disdata}>
                    Delete
                  </DeletedataDisAmount>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default EditDistributAmount;
