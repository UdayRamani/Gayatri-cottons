import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import Header from "../../components/Header";
import { db } from "../../config/fire";
import "../../styles/Selling.css";
import fire from "../../config/fire";
import { Select } from "@material-ui/core";

function SellingBelles() {
  const [selldate, setSellDate] = useState("");
  const [billnameInput, setBillNameInput] = useState("");
  const [partynameInput, setPartyNameInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [rupeeInput, setRupeeInput] = useState("");
  const [brokernameInput, setBrokerNameInput] = useState("");
  const [SellProduct, setSellProduct] = useState("Belles");
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
      setCurrentUser(user.email);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Selling").add({
      sellingdate: selldate,
      billNo: billnameInput,
      partiname: partynameInput,
      weight: weightInput,
      price: priceInput,
      totalrupee: total,
      brokername: brokernameInput,
      sellProduct: value,
      currentUser: CurrentUser,
    });
    setSellDate("");
    setBillNameInput("");
    setPartyNameInput("");
    setWeightInput("");
    setPriceInput("");
    setRupeeInput("");
    setBrokerNameInput("");
    setSellProduct("");
    setCurrentUser("");
  };
  return (
    <div>
      <Header />
      <div className="header">SELLING {itemcotton}</div>
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
              placeholder={"0012"}
              value={billnameInput}
              onChange={(e) => setBillNameInput(e.target.value)}
              required
            />
            <label className="labletext">PartyName</label>
            <input
              className="inputitem"
              placeholder="abcdef"
              value={partynameInput}
              onChange={(e) => setPartyNameInput(e.target.value)}
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

export default SellingBelles;
