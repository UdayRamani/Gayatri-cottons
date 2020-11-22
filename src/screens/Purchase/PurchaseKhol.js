import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { db } from "../../config/fire";
import '../../styles/Purchase.css'
import fire from "../../config/fire";

function PurchaseKhol() {
  const [date, setDate] = useState("");
  const [truckInput, settruckInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [rupeeInput, setRupeeInput] = useState("");
  const [partynameInput, setPartyNameInput] = useState("");
  // const [farmerNameInput, setFarmerNAmeInput] = useState("");
  // const [DisAmountInput, setDisAmountInput] = useState("");
  // const [paymentInput, setPaymentInput] = useState("");
  const [brokernameInput, setBrokerNameInput] = useState("");
  const [CottonInput,setCottonInput]=useState("Khol");
  const [CurrentUser, setCurrentUser] = useState("");

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user.email)
    });
  }, []);
    console.log(CurrentUser);

    var total = weightInput * priceInput / 50;
    total = Math.round(total);

    console.log("total" + total);
  const handleSubmit = (e) => {
   
    e.preventDefault();
    db.collection("Purchase").add({
      date: date,
      trucknumber: truckInput,
      weight: weightInput,
      price: priceInput,
      totalrupee: total,
      partiname: partynameInput,
      // farmername: farmerNameInput,
      // disamount: DisAmountInput,
      // paymentdate: paymentInput,
      brokername: brokernameInput,
      cottonInput: CottonInput,
      currentUser: CurrentUser

    });
    setDate("");
    settruckInput("");
    setWeightInput("");
    setPriceInput("");
    setRupeeInput("");
    setPartyNameInput("");
    // setFarmerNAmeInput("");
    // setDisAmountInput("");
    // setPaymentInput("");
    setBrokerNameInput("");
    setCottonInput("");
    setCurrentUser("");
  };
  return (
    <div>
      <Header />
      <div className="header">PURCHASE KHOL</div>
      <div className="dropDiv">
      <Dropdown>
        <Dropdown.Toggle className="dropdownMenu" id="dropdown-basic">
          Dropdown The Catogaries
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/PurchaseBelles">Cotton Bells</Dropdown.Item>
          <Dropdown.Item href="/PurchaseOil">Oil</Dropdown.Item>
          <Dropdown.Item href="/PurchaseSeed">Cotton Seed</Dropdown.Item>
          <Dropdown.Item href="/PurchaseCotton">Cotton</Dropdown.Item>
          <Dropdown.Item href="/PurchaseWastage">Wastage</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      </div>
      <div className="purchase">
        <div className="purchasefrom">
          <form>
            <label className="labletext">Date</label>
            <input
              type="date"
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
              value={total}
              onChange={(e) => setRupeeInput(e.target.value)}
            />
            <label className="labletext">PartyName</label>
            <input
              className="inputitem"
              placeholder="abcdef"
              value={partynameInput}
              onChange={(e) => setPartyNameInput(e.target.value)}
            />
            {/* <label className="labletext">FarmerName</label>
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
            /> */}
            {/* <label className="labletext">PaymentDate</label>
            <input
              type="date"
              className="inputitem"
              value={paymentInput}
              onChange={(e) => setPaymentInput(e.target.value)}
            /> */}
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default PurchaseKhol;
