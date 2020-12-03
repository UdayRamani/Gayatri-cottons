import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../config/fire";
import "../styles/Selling.css";

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

  var total = 0;
  if (Sellings.sellProduct == "cotton") {
    total = (weightInput * priceInput) / 40;
  }
  if (Sellings.sellProduct == "belles") {
    total = (weightInput * priceInput * 0.2812) / 100;
  }
  if (Sellings.sellProduct == "khol") {
    total = (weightInput * priceInput) / 50;
  }
  if (Sellings.sellProduct == "oil") {
    total = (weightInput * priceInput) / 10;
  }
  if (Sellings.sellProduct == "seed") {
    total = (weightInput * priceInput) / 20;
  }
  if (Sellings.sellProduct == "wastage") {
    total = weightInput * priceInput;
  }
  total = Math.round(total);
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Selling").doc(SellingID).update({
      sellingdate: selldate,
      billNo: billnameInput,
      partiname: partynameInput,
      weight: weightInput,
      price: priceInput,
      totalrupee: total,
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

  // const [Selling, setSelling] = useState([]);
  // useEffect(() => {
  //   db.collection("Selling").onSnapshot((snapshot) =>
  //     setSelling(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
  //   );
  //   return () => {};
  // }, []);
  // var cuttunUser=0;
  // {Selling.map((Purchases)=>(
  //   cuttunUser= Purchases.data.currentUser
  // ))}
  return (
    <div>
      <Header />

      <div className="header">EDIT SELLING DATA</div>
      <div className="LableBox">
        <label className="labelOfCurrntUser">User ID : {Sellings.currentUser}</label>
        <label className="lableOfProduct">Product : {Sellings.sellProduct}</label>
      </div>

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
            <label className="labletext">Weight(kg)</label>
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
              value={total}
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
