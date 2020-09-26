import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { db } from "../config/fire";
import "../styles/Purchase.css";
function Purchase() {
  const [date, setDate] = useState("");
  const [truckInput, settruckInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [rupeeInput, setRupeeInput] = useState("");
  const [partynameInput, setPartyNameInput] = useState("");
  const [farmerNameInput, setFarmerNAmeInput] = useState("");
  const [DisAmountInput, setDisAmountInput] = useState("");
  const [paymentInput, setPaymentInput] = useState("");
  const [brokernameInput, setBrokerNameInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Purchase").add({
      date:date,
      trucknumber:truckInput,
      weight:weightInput,
      price:priceInput,
      totalrupee:rupeeInput,
      partiname:partynameInput,
      farmername:farmerNameInput,
      disamount:DisAmountInput,
      paymentdate:paymentInput,
      brokername:brokernameInput
    });

    setDate("");
    settruckInput("");
    setWeightInput("");
    setPriceInput("");
    setRupeeInput("");
    setPartyNameInput("");
    setFarmerNAmeInput("");
    setDisAmountInput("");
    setPaymentInput("");
    setBrokerNameInput("");
  };
  return (
    <div>
      <Header />

      <div className="header">PURCHASE</div>

      <Link to="/showpurchase">
      <button >Saveddata</button>
       </Link>
      <div className="purchase">
        <div className="purchasefrom">
          <form>
            <label className="labletext">Date</label>
            <input
              type="datetime-local"
              className="inputitem"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label className="labletext">Truck-Number</label>
            <input
              type="text"
              className="inputitem"
              placeholder="GJ12 xd 0000"
              value={truckInput}
              onChange={(e) => settruckInput(e.target.value)}
              required
            />
            <label className="labletext">Weight</label>
            <input
              type="number"
              className="inputitem"
              placeholder="1000 kilos"
              value={weightInput}
              onChange={(e) => setWeightInput(e.target.value)}
            />
            <label className="labletext">Price</label>
            <input
              className="inputitem"
              placeholder="0000000"
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
            />
            <label className="labletext">Total-Rupee</label>
            <input
              className="inputitem"
              placeholder="0000000"
              value={rupeeInput}
              onChange={(e) => setRupeeInput(e.target.value)}
            />
            <label className="labletext">PartyName</label>
            <input
              className="inputitem"
              placeholder="abcdef"
              value={partynameInput}
              onChange={(e) => setPartyNameInput(e.target.value)}
            />
            <label className="labletext">FarmerName</label>
            <input
              className="inputitem"
              placeholder="absdef"
              value={farmerNameInput}
              onChange={(e) => setFarmerNAmeInput(e.target.value)}
            />
            <label className="labletext">DistributAmount</label>
            <input
              className="inputitem"
              placeholder="0000000"
              value={DisAmountInput}
              onChange={(e) => setDisAmountInput(e.target.value)}
            />
            <label className="labletext">PaymentDate</label>
            <input
              type="date"
              className="inputitem"
              value={paymentInput}
              onChange={(e) => setPaymentInput(e.target.value)}
            />
            <label className="labletext">BrokerName</label>
            <input
              className="inputitem"
              placeholder="abcdef"
              value={brokernameInput}
              onChange={(e) => setBrokerNameInput(e.target.value)}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              class="btn btn-outline-info"
            >
              Submit
            </button>
            <button type="reset" value="reset">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
