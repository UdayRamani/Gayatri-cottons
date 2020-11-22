import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { db } from "../../config/fire";
import fire from "../../config/fire";
import '../../styles/Purchase.css'
import { Select } from "@material-ui/core";

function PurchaseCotton() {
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
  const [CottonInput,setCottonInput]=useState("Cotton");
  const [CurrentUser, setCurrentUser] = useState("");

  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([
    { label: "cotton", value: "cotton" },
    { label: "belles", value: "belles" },
    { label: "seed", value: "seed" },
    { label: "khol", value: "khol" },
    { label: "oil", value: "oil" },
    { label: "wastage", value: "wastage" },
  ]);
  
  const [value, setValue] = React.useState("R2-D2");

  var itemcotton = "";
  var total = 0; 
 
    if (value == "cotton") {
      itemcotton = "COTTON";
      total = weightInput * priceInput / 40;
    }
    if (value == "belles") {
      itemcotton = "BELLES";
      total = (weightInput * priceInput * 0.2812) / 100;
    }
    if (value == "seed") {
      itemcotton = "SEED";
      total = weightInput * priceInput / 20;
    }
    if (value == "khol") {
      itemcotton = "KHOL";
      total = weightInput * priceInput / 50;
    }
    if (value == "oil") {
      itemcotton = "OIL";
      total = weightInput * priceInput / 10;
    }
    if (value == "wastage") {
      itemcotton = "WASTAGE";
      total = weightInput * priceInput;
    }

    total = Math.round(total);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user.email)
    });
  }, []);

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
      cottonInput: value,
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

      <div className="header">PURCHASE {itemcotton}</div>
      <div className="dropDiv">
        <label className="productDrop">Select The Product Here</label>
        <Select
          className="dropdownMenu1"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        >
          {items.map(({ label, value }) => (
            <option className="OptionsDropDown" key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </div>
      {/* <div className="dropDiv">
      <Dropdown>
        <Dropdown.Toggle className="dropdownMenu" id="dropdown-basic">
          Dropdown The Catogaries
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/PurchaseBelles">Cotton Bells</Dropdown.Item>
          <Dropdown.Item href="/PurchaseOil">Oil</Dropdown.Item>
          <Dropdown.Item href="/PurchaseWastage">Wastage</Dropdown.Item>
          <Dropdown.Item href="/Purchaseseed">Cotton Seed</Dropdown.Item>
          <Dropdown.Item href="/PurchaseKhol">Khol</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div> */}
      <div className="purchase">
        <div className="purchasefrom">
          <form autocomplete="on">
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

export default PurchaseCotton;
