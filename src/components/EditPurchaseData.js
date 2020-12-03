import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { db } from "../config/fire";
import Databses from "../screens/Databses";
import "../styles/Purchase.css";
function EditPurchaseData({ Purchases, PurchaseID }) {
  const [Purchase, setpurchase] = useState([]);

  const [dateInput, setDate] = useState(Purchases.date);
  const [truckInput, settruckInput] = useState(Purchases.trucknumber);
  const [weightInput, setWeightInput] = useState(Purchases.weight);
  const [priceInput, setPriceInput] = useState(Purchases.price);
  const [rupeeInput, setRupeeInput] = useState(Purchases.totalrupee);
  const [partynameInput, setPartyNameInput] = useState(Purchases.partiname);
  // const [farmerNameInput, setFarmerNAmeInput] = useState(Purchases.farmername);
  // const [DisAmountInput, setDisAmountInput] = useState(Purchases.disamount);
  // const [paymentInput, setPaymentInput] = useState(Purchases.paymentdate);
  const [brokernameInput, setBrokerNameInput] = useState(Purchases.brokername);
  // const [outWeightInput, setoutWeight] = useState(Purchases.outweight);

  var total = 0;
  if (Purchases.cottonInput == "cotton") {
    total = (weightInput * priceInput) / 40;
  }
  if (Purchases.cottonInput == "belles") {
    total = (weightInput * priceInput * 0.2812) / 100;
  }
  if (Purchases.cottonInput == "khol") {
    total = (weightInput * priceInput) / 50;
  }
  if (Purchases.cottonInput == "oil") {
    total = (weightInput * priceInput) / 10;
  }
  if (Purchases.cottonInput == "seed") {
    total = (weightInput * priceInput) / 20;
  }
  if (Purchases.cottonInput == "wastage") {
    total = weightInput * priceInput;
  }
  total = Math.round(total);

  const handleSubmit = (e) => {
    const alertss = () => {
      alert("Your Data Is Updated");
    };
    e.preventDefault();
    db.collection("Purchase").doc(PurchaseID).update({
      date: dateInput,
      trucknumber: truckInput,
      weight: weightInput,
      price: priceInput,
      totalrupee: total,
      partiname: partynameInput,
      // farmername: farmerNameInput,
      // disamount: DisAmountInput,
      // paymentdate: paymentInput,
      brokername: brokernameInput,
      // outweight: outWeightInput,
    });
    alertss();
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
    // setoutWeight("");
  };
  // useEffect(() => {
  //   db.collection("Purchase")
  //     .orderBy("date", "desc")
  //     .onSnapshot((snapshot) =>
  //       setpurchase(
  //         snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
  //       )
  //     );
  //   return () => {};
  // }, []);

  // var cuttunUser = 0;
  // {
  //   Purchase.map((Purchases) => (cuttunUser = Purchases.data.currentUser));
  // }
  return (
    <div>
      <Header />
      <div className="header">EDIT PURCHASE DATA</div>
      <div className="LableBox">
        <label className="labelOfCurrntUser">
          User ID : {Purchases.currentUser}
        </label>
        <label className="lableOfProduct">
          Product : {Purchases.cottonInput}
        </label>
      </div>
      <div className="purchase">
        <div className="purchasefrom">
          <form>
            <label className="labletext">Date</label>
            <input
              type="date"
              className="inputitem"
              value={dateInput}
              onFocus
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label className="labletext">Truck-Number</label>
            <input
              type="text"
              className="inputitem"
              value={truckInput}
              onFocus
              onChange={(e) => settruckInput(e.target.value)}
              required
            />
            <label className="labletext">weight(kg)</label>
            <input
              type="number"
              className="inputitem"
              value={weightInput}
              onFocus
              required
              onChange={(e) => setWeightInput(e.target.value)}
            />
            {/* <label className="labletext">out weight</label>
             <input
              type="number"
              className="inputitem"
              value={outWeightInput}
              onFocus
              required
              onChange={(e) => setoutWeight(e.target.value)}
            /> */}
            <label className="labletext">Price</label>
            <input
              className="inputitem"
              value={priceInput}
              onFocus
              required
              onChange={(e) => setPriceInput(e.target.value)}
            />
            <label className="labletext">Total-Rupee</label>
            <input
              className="inputitem"
              value={total}
              onFocus
              required
              onChange={(e) => setRupeeInput(e.target.value)}
            />
            <label className="labletext">PartyName</label>
            <input
              className="inputitem"
              value={partynameInput}
              onFocus
              required
              onChange={(e) => setPartyNameInput(e.target.value)}
            />
            {/* <label className="labletext">FarmerName</label>
            <input
              className="inputitem"
              value={farmerNameInput}
              onFocus
              required
              onChange={(e) => setFarmerNAmeInput(e.target.value)}
            />
            <label className="labletext">Distribute-Amount</label>
            <input
              className="inputitem"
              value={DisAmountInput}
              onFocus
              required
              onChange={(e) => setDisAmountInput(e.target.value)}
            />
            <label className="labletext">PaymentDate</label>
            <input
              type="date"
              className="inputitem"
              value={paymentInput}
              onFocus
              required
              onChange={(e) => setPaymentInput(e.target.value)}
            /> */}
            <label className="labletext">BrokerName</label>
            <input
              className="inputitem"
              value={brokernameInput}
              onFocus
              required
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

export default EditPurchaseData;
