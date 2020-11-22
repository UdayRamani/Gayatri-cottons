import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import Header from "../../components/Header";
import { db } from "../../config/fire";
import "../../styles/Selling.css";
import fire from "../../config/fire";

function SellingCotton() {
  const [selldate, setSellDate] = useState("");
  const [billnameInput, setBillNameInput] = useState("");
  const [partynameInput, setPartyNameInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [rupeeInput, setRupeeInput] = useState("");
  const [brokernameInput, setBrokerNameInput] = useState("");
  const [SellProduct, setSellProduct] = useState("Cotton");
  const [CurrentUser, setCurrentUser] = useState("");

  var total = weightInput * priceInput / 40;
  total = Math.round(total);

  console.log("total" + total);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user.email)
    });
  }, []);
    console.log(CurrentUser);

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
      sellProduct: SellProduct,
      currentUser: CurrentUser

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
      <div className="header">SELLING COTTON</div>
      <div className="dropDiv">
        <Dropdown>
          <Dropdown.Toggle className="dropdownMenu" id="dropdown-basic">
            Dropdown The Catogaries
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/SellingWastage">Wastage</Dropdown.Item>
            <Dropdown.Item href="/SellingOil">Oil</Dropdown.Item>
            <Dropdown.Item href="/SellingKhol">Khol</Dropdown.Item>
            <Dropdown.Item href="/SellingSeed">Cotton Seed</Dropdown.Item>
            <Dropdown.Item href="/SellingBelles">Cotton Belles</Dropdown.Item>
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

export default SellingCotton;
