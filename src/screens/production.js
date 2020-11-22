import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Header from "../components/Header";
import { db } from "../config/fire";
import moment from "moment";
import ShowDatevise from "../components/ShowDatevise";
import Databses from "./Databses";
import "../styles/Production.css";
import { Input } from "@material-ui/core";
function Production() {
  const today = moment();
  const current = today.format("YYYY-MM-DD");
  const tidaydate = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
  const [Purchase, setpurchase] = useState([]);
  const [Selling, setSelling] = useState([]);
  const [SearchProdusction, setSearchProdusction] = useState("");
  const [SearchProdusction1, setSearchProdusction1] = useState("");

  //DataBase
  useEffect(() => {
    db.collection("Purchase").onSnapshot((snapshot) =>
      setpurchase(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      )
    );
    return () => {};
  }, []);

  useEffect(() => {
    db.collection("Selling").onSnapshot((snapshot) =>
      setSelling(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    return () => {};
  }, []);

  //Search Data
  let serachData1 = Purchase;
  let serachData2 = Selling;

  if (SearchProdusction.length > 0) {
    serachData1 = serachData1.filter((i) => {
      return (
        i.data.date >= SearchProdusction && i.data.date <= SearchProdusction1
      );
    });
    serachData2 = serachData2.filter((i) => {
      return (
        i.data.sellingdate >= SearchProdusction &&
        i.data.sellingdate >= SearchProdusction1
      );
    });
  }
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchProdusction(e.target.value);
  };

  const handleSearch1 = (e) => {
    e.preventDefault();

    setSearchProdusction1(e.target.value);
  };

  var cottonprod = 0;
  var cottonBellesprod = 0;
  var totalCottonBellesprod = 0;
  var CottonSeedprod = 0;
  var westCottonprod = 0;
  var oilprod = 0;
  var cottonSeedCakeprod = 0;
  var wastSeedprod = 0;
  var dateprod;
  serachData1.map((purchases) => {
    if (purchases.data.cottonInput == "cotton") {
      dateprod = purchases.data.date;
      cottonprod += +purchases.data.weight;
      cottonBellesprod += (+purchases.data.weight * 33) / 100;

      totalCottonBellesprod += (+purchases.data.weight * 33) / 100 / 160;
      totalCottonBellesprod = Math.round(totalCottonBellesprod);
      CottonSeedprod += (+purchases.data.weight * 66) / 100;
      westCottonprod += (+purchases.data.weight * 1) / 100;
      oilprod += (((purchases.data.weight * 66) / 100) * 10) / 100;
      cottonSeedCakeprod += +(((purchases.data.weight * 66) / 100) * 85) / 100;
      wastSeedprod += +(((purchases.data.weight * 66) / 100) * 5) / 100;
    }
  });
  var cotton = 0;
  var belles = 0;
  var seed = 0;
  var wastage = 0;
  var oil = 0;
  var khol = 0;
  serachData1.map((Purchases) => {
    if (Purchases.data.cottonInput == "cotton") {
      cotton += +Purchases.data.weight;
    }
    if (Purchases.data.cottonInput == "belles") {
      belles += +Purchases.data.weight;
    }
    if (Purchases.data.cottonInput == "seed") {
      seed += +Purchases.data.weight;
    }
    if (Purchases.data.cottonInput == "wastage") {
      wastage += +Purchases.data.weight;
    }
    if (Purchases.data.cottonInput == "oil") {
      oil += +Purchases.data.weight;
    }
    if (Purchases.data.cottonInput == "khol") {
      khol += +Purchases.data.weight;
    }
  });

  var cottonsell = 0;
  var bellessell = 0;
  var seedsell = 0;
  var wastagesell = 0;
  var oilsell = 0;
  var kholsell = 0;
  serachData2.map((Selling) => {
    if (Selling.data.sellProduct == "cotton") {
      cottonsell += +Selling.data.weight;
    }
    if (Selling.data.sellProduct == "belles") {
      bellessell += +Selling.data.weight;
    }
    if (Selling.data.sellProduct == "seed") {
      seedsell += +Selling.data.weight;
    }
    if (Selling.data.sellProduct == "wastage") {
      wastagesell += +Selling.data.weight;
    }
    if (Selling.data.sellProduct == "oil") {
      oilsell += +Selling.data.weight;
    }
    if (Selling.data.sellProduct == "khol") {
      kholsell += +Selling.data.weight;
    }
  });

  var totalBelles = ((cottonprod - cottonsell) * 33) / 100;
  totalBelles = Math.round(totalBelles);
  var totalSeed = ((cottonprod - cottonsell) * 65) / 100;
  totalSeed = Math.round(totalSeed);
  var totalkhol = ((totalSeed + seed - seedsell) * 85) / 100;
  totalkhol = Math.round(totalkhol);
  var totalOil = ((totalSeed + seed - seedsell) * 10) / 100;
  totalOil = Math.round(totalOil);
  var totalwastage = ((totalSeed + seed - seedsell) * 5) / 100;
  totalwastage = Math.round(totalwastage);

  return (
    <div>
      <Header />
      <div className="headerProduction">PRODUCTION</div>
      {/* <Databses /> */}
      <div className="header11">And All Accounts</div>
      <div className="DateInpuStart">
        <label className="startdatetext">Starting Date</label>
        <input
          type="date"
          onChange={handleSearch}
          value={SearchProdusction}
          className="SearchField122"
        />
      </div>
      <div className="DateInpuEnd">
        <label className="Enddatetext">Ending Date</label>
        <input
          type="date"
          onChange={handleSearch1}
          value={SearchProdusction1}
          className="SearchField1223"
        />
      </div>
      <Table striped bordered hover>
        <thead className="bodytable">
          <tr>
            <th scope="col">Products Name</th>
            <th scope="col">Purchase Item</th>
            <th scope="col">Selling Item</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <td>
            <h5>
              <tr className="hadingOfAccounts">Cotton</tr>
            </h5>
            <h5>
              <tr className="hadingOfAccounts">Belles</tr>
            </h5>
            <h5>
              <tr className="hadingOfAccounts">Seed</tr>
            </h5>
            <h5>
              <tr className="hadingOfAccounts">Wastage</tr>
            </h5>
            <h5>
              <tr className="hadingOfAccounts">Oil</tr>
            </h5>
            <h5>
              <tr className="hadingOfAccounts">Khol</tr>
            </h5>
          </td>
          <td>
            <h5>
              <tr>{cotton}</tr>
            </h5>
            <h5>
              <tr> {totalBelles + belles}</tr>
            </h5>
            <h5>
              <tr>{totalSeed + seed}</tr>
            </h5>
            <h5>
              <tr>{totalwastage + wastage}</tr>
            </h5>
            <h5>
              <tr>{totalOil + oil}</tr>
            </h5>
            <h5>
              <tr>{totalkhol + khol}</tr>
            </h5>
          </td>
          <td>
            <h5>
              <tr>{cottonsell}</tr>
            </h5>
            <h5>
              <tr> {bellessell}</tr>
            </h5>
            <h5>
              <tr>{seedsell}</tr>
            </h5>
            <h5>
              <tr>{wastagesell}</tr>
            </h5>
            <h5>
              <tr>{oilsell}</tr>
            </h5>
            <h5>
              <tr>{kholsell}</tr>
            </h5>
          </td>
          <td>
            <h5>
              <tr> = {cotton - cottonsell}</tr>
            </h5>
            <h5>
              <tr> = {totalBelles + belles - bellessell}</tr>
            </h5>
            <h5>
              <tr> = {totalSeed + seed - seedsell}</tr>
            </h5>
            <h5>
              <tr> = {totalwastage + wastage - wastagesell}</tr>
            </h5>
            <h5>
              <tr> = {totalOil + oil - oilsell}</tr>
            </h5>
            <h5>
              <tr> = {totalkhol + khol - kholsell}</tr>
            </h5>
          </td>
        </tbody>
      </Table>
    </div>
  );
}
export default Production;
