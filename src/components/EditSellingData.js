import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../config/fire";
import { positions, transitions, types } from "react-alert";
import { useAlert } from "react-alert";
import { MDBContainer, MDBAlert } from "mdbreact";

function EditSellingData({ Sellings, SellingID }) {
  const [selldate, setSellDate] = useState(Sellings.sellingdate);
  const [billnameInput, setBillNameInput] = useState(Sellings.billNo);
  const [partynameInput, setPartyNameInput] = useState(Sellings.partiname);
  const [weightInput, setWeightInput] = useState(Sellings.weight);
  const [priceInput, setPriceInput] = useState(Sellings.price);
  const [rupeeInput, setRupeeInput] = useState(Sellings.totalrupee);
  const [brokernameInput, setBrokerNameInput] = useState(Sellings.brokername);
  const alertss = () => {
    alert("Your Data Is Updated");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    db.collection("Selling").doc(SellingID).update({
      sellingdate: selldate,
      billNo: billnameInput,
      partiname: partynameInput,
      weight: weightInput,
      price: priceInput,
      totalrupee: rupeeInput,
      brokername: brokernameInput,
    });
    alertss();
    setSellDate("");
    setBillNameInput("");
    setPartyNameInput("");
    setWeightInput("");
    setPriceInput("");
    setRupeeInput("");
    setBrokerNameInput("");
  };

  const [Selling, setSelling] = useState([]);
  useEffect(() => {
    db.collection("Selling").onSnapshot((snapshot) =>
      setSelling(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    return () => {};
  }, []);
  return (
    <div>
      <Header />

      <div className="header">EDIT SELLING DATA</div>
      <div className="purchase">
        <div className="purchasefrom">
          <form>
            <label className="labletext">Date</label>
            <input
              type="date"
              className="inputitem"
              value={selldate}
              onChange={(e) => setSellDate(e.target.value)}
              required
            />
            <label className="labletext">Bill-No</label>
            <input
              type="text"
              className="inputitem"
              value={billnameInput}
              onChange={(e) => setBillNameInput(e.target.value)}
              required
            />
            <label className="labletext">PartyName</label>
            <input
              className="inputitem"
              value={partynameInput}
              onChange={(e) => setPartyNameInput(e.target.value)}
            />
            <label className="labletext">Weight</label>
            <input
              type="number"
              className="inputitem"
              value={weightInput}
              onChange={(e) => setWeightInput(e.target.value)}
            />
            <label className="labletext">Price</label>
            <input
              className="inputitem"
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
            />
            <label className="labletext">Total-Rupee</label>
            <input
              className="inputitem"
              value={rupeeInput}
              onChange={(e) => setRupeeInput(e.target.value)}
            />

            <label className="labletext">BrokerName</label>
            <input
              className="inputitem"
              value={brokernameInput}
              onChange={(e) => setBrokerNameInput(e.target.value)}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              class="btn btn-outline-info"
            >
              UPDATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditSellingData;
