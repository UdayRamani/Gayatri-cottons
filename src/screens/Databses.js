import React, { useState, useEffect } from "react";
import "../styles/Databses.css";
import { db } from "../config/fire";
import ShowDatevise from "../components/ShowDatevise";
import moment from "moment";
function Databses() {
  const today = moment();
  const current = today.format("YYYY-MM-DD");
  const tidaydate = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
  const [Purchase, setpurchase] = useState([]);
  const [SearchProdusction, setSearchProdusction] = useState("");

  useEffect(() => {
    db.collection("Purchase").onSnapshot((snapshot) =>
      setpurchase(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      )
    );
    return () => {};
  }, []);

  let serachData = Purchase;

  if (SearchProdusction.length > 0) {
    serachData = serachData.filter((i) => {
      return i.data.date.match(SearchProdusction);
    });
  }
  var datat = moment(new Date(SearchProdusction).toDateString()).format(
    "YYYY-MM-DD"
  );
  console.log(datat);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchProdusction(e.target.value);
  };
  var cotton = 0;
  var cottonBelles = 0;
  var totalCottonBelles = 0;
  var CottonSeed = 0;
  var westCotton = 0;
  var oil = 0;
  var cottonSeedCake = 0;
  var wastSeed = 0;
  var date;
  serachData.map((purchases) => {
    if (purchases.data.cottonInput == "Cotton") {
      date = purchases.data.date;
      cotton += +purchases.data.weight;
      cottonBelles += (+purchases.data.weight * 33) / 100;

      totalCottonBelles += (+purchases.data.weight * 33) / 100 / 160;
      totalCottonBelles = Math.round(totalCottonBelles);
      CottonSeed += (+purchases.data.weight * 66) / 100;
      westCotton += (+purchases.data.weight * 1) / 100;
      oil += (((purchases.data.weight * 66) / 100) * 10) / 100;
      cottonSeedCake += +(((purchases.data.weight * 66) / 100) * 85) / 100;
      wastSeed += +(((purchases.data.weight * 66) / 100) * 5) / 100;
    }
  });

  return (
    <div className="databases">
      <label className="todaytext">{tidaydate}</label>

      {/* <div className="inputsearchbox21"> */}
      <label className="HeaderTexttitle2">Check Your Production By Date</label>
      <input
        type="date"
        onChange={handleSearch}
        value={SearchProdusction}
        className="SearchFiledForProduction"
      />
      {/* </div> */}
      <label className="HeaderTexttitle">TOTAL PRODUCTION</label>

      <div className="databox1">
        <label className="CottonText">Date Is : {date}</label>

        <label className="CottonText">Cotton : {cotton} Killos</label>

        <label className="CottonText">
          Cotton Bells Weight : {cottonBelles} Killos
        </label>
        <label className="CottonText">
          Total Cotton Bells : {totalCottonBelles}
        </label>
        <label className="CottonText">Cotton Seed : {CottonSeed} Killos</label>
        <label className="CottonText">WestCotton : {westCotton} Killos</label>
        <label className="CottonText">Oil : {oil} Killos</label>
        <label className="CottonText">
          CottonSeedCake : {cottonSeedCake} Killos
        </label>
      </div>
      {/* <div>
        <label className="HeaderTexttitle">Truck Vise</label>
        <div className="databoxmail">
        {Purchase.map((purchases) => (
        
          <div className="databox">
            <label className="TruckText">{purchases.data.trucknumber}</label>
            <label className="TruckText">
              Cotton : {purchases.data.weight - purchases.data.outweight} Killos
            </label>
            <label className="Cotton-Bell-Text">
              Cotton-Belles-weight :{" "}
              {((purchases.data.weight - purchases.data.outweight) * 33) / 100}{" "}
              Killos
            </label>
            <label className="Total-Cotton-bell-Text">
              Total-Cotton_belles :
              {((purchases.data.weight - purchases.data.outweight) * 33) /
                100 /
                160}
            </label>
            <label className="Cotton-Seed-Text">
              Cotton-Seed :{" "}
              {((purchases.data.weight - purchases.data.outweight) * 66) / 100}{" "}
              Killos
            </label>
          </div>
        ))}
      </div>
      </div> */}

      <div></div>
    </div>
  );
}

export default Databses;
