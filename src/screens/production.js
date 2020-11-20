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
    db.collection("Purchase")
    .onSnapshot((snapshot) =>
      setpurchase(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      )
    );
    return () => {};
  }, []);

  let serachData1 = Purchase;
  let serachData2 = Selling;

  let SearchProductionsss=SearchProdusction-SearchProdusction1;
  
  if (SearchProdusction.length > 0) {
    serachData1 = serachData1.filter((i) => {
      return i.data.date.match(SearchProdusction);
    });
    serachData2 = serachData2.filter((i) => {
      return i.data.sellingdate.match(SearchProdusction);
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
    if(purchases.data.cottonInput == "Cotton"){
    dateprod = purchases.data.date;
    cottonprod += +purchases.data.weight
    cottonBellesprod +=
      (+(purchases.data.weight) * 33) / 100;

    totalCottonBellesprod +=
      (+(purchases.data.weight) * 33) / 100 / 160;
    totalCottonBellesprod = Math.round(totalCottonBellesprod);
    CottonSeedprod +=
      (+(purchases.data.weight) * 66) / 100;
    westCottonprod +=
      (+(purchases.data.weight ) * 1) / 100;
    oilprod +=
      ((((purchases.data.weight ) * 66) / 100) * 10) /
      100;
    cottonSeedCakeprod +=
      +(
        (((purchases.data.weight ) * 66) / 100) *
        85
      ) / 100;
    wastSeedprod +=
      +((((purchases.data.weight) * 66) / 100) * 5) /
      100;
    }
  });
  var cotton = 0;
  var belles = 0;
  var seed = 0;
  var wastage = 0;
  var oil = 0;
  var khol=0;
  serachData1.map((Purchases) => {
    if (Purchases.data.cottonInput == "Cotton") {
      cotton += +Purchases.data.weight;
    }
    if (Purchases.data.cottonInput == "Bells") {
      belles += +Purchases.data.weight;
    }
    if (Purchases.data.cottonInput == "Seed") {
      seed += +Purchases.data.weight;
    }
    if (Purchases.data.cottonInput == "Wastage") {
      wastage += +Purchases.data.weight;
    }
    if (Purchases.data.cottonInput == "Oil") {
      oil += +Purchases.data.weight;
    }
    if (Purchases.data.cottonInput == "Khol") {
      khol += +Purchases.data.weight;
    }
  });
  useEffect(() => {
    db.collection("Selling")
    .onSnapshot((snapshot) =>
      setSelling(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    return () => {};
  }, []);

  var cottonsell = 0;
  var bellessell = 0;
  var seedsell = 0;
  var wastagesell = 0;
  var oilsell = 0;
  var kholsell=0;
  serachData2.map((Selling) => {
    if (Selling.data.sellProduct == "Cotton") {
      cottonsell += +Selling.data.weight;
    }
    if (Selling.data.sellProduct == "Belles") {
      bellessell += +Selling.data.weight;
    }
    if (Selling.data.sellProduct == "Seed") {
      seedsell += +Selling.data.weight;
    }
    if (Selling.data.sellProduct == "Wastage") {
      wastagesell += +Selling.data.weight;
    }
    if (Selling.data.sellProduct == "Oil") {
      oilsell += +Selling.data.weight;
    }
    if (Selling.data.sellProduct == "Khol") {
      kholsell += +Selling.data.weight;
    }
  });
  var totalBelles=(cottonprod - cottonsell)*33/100;
  var totalSeed=(cottonprod - cottonsell)*65/100;

  var totalkhol=(totalSeed+seed- seedsell)*85/100;
  var totalOil=(totalSeed+seed- seedsell)*10/100;
  var totalwastage=(totalSeed+seed- seedsell)*5/100;

  return (
    <div>
      <Header />
      <div className="headerProduction">PRODUCTION</div>
      {/* <Databses /> */}
      <div className="header">All Accounts</div>
      <input
        type="date"
        onChange={handleSearch}
        value={SearchProdusction}
        className="SearchField122"
      />
       <input
        type="date"
        onChange={handleSearch1}
        value={SearchProdusction1}
        className="SearchField1223"
      />
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
              <tr> {totalBelles+belles}</tr>
            </h5>
            <h5>
              <tr>{totalSeed+seed}</tr>
            </h5>
            <h5>
              <tr>{totalwastage+wastage}</tr>
            </h5>
            <h5>
              <tr>{totalOil+oil}</tr>
            </h5>
            <h5>
              <tr>{totalkhol+khol}</tr>
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
              <tr> = {totalBelles+belles- bellessell}</tr>
            </h5>
            <h5>
              <tr> = {totalSeed+seed- seedsell}</tr>
            </h5>
            <h5>
              <tr> = {totalwastage+wastage- wastagesell}</tr>
            </h5>
            <h5>
              <tr> = {totalOil+oil- oilsell}</tr>
            </h5>
            <h5>
              <tr> = {totalkhol+khol- kholsell}</tr>
            </h5>
          </td>
        </tbody>
      </Table>
      {/* <div className="showPurchaseBoxes">
        <label className="texttotalweight">Cotton : {cotton}</label>
        <label className="texttotalweight"> Belles : {belles}</label>
        <label className="texttotalweight">Seed : {seed}</label>
        <label className="texttotalweight">Wastage : {wastage}</label>
        <label className="texttotalweight">Oil : {oil}</label>
      </div> */}
    </div>
  );
}

export default Production;
{
  // const [cottonbellesper, setcottonbellesper] = useState("");
  // const [Current, setCurrent] = useState(1);
  // const [DataPerPage, setDataPerPage] = useState(5);
  // const indexOfLastData = Current * DataPerPage;
  // const indexOdFirstData = indexOfLastData - DataPerPage;
  // const currentData = Purchase.slice(indexOdFirstData, indexOfLastData);
  // const pageNumber = [];
  // const finaldata = Purchase.length;
  //Pagination...................
  // for (let i = 1; i <= Math.ceil(finaldata / DataPerPage); i++) {
  //   pageNumber.push(i);
  // }
  // var yes;
  // var defaulvalue = 160;
  // if (defaulvalue) {
  //   yes = defaulvalue;
  // } else {
  //   yes = cottonbellesper;
  // }
  // var yess;
  // if (!cottonbellesper) {
  //   yess = yes;
  // } else {
  //   yess = cottonbellesper;
  // }
  /* <Table responsive striped bordered hover>
<thead className="bodytable">
  <tr>
    <th scope="col">Date </th>
    <th scope="col">TruckNumber</th>
    <th scope="col">Cotton </th>
    <th scope="col">Cotton-Bells-weight</th>
    <th scope="col">
      Total Cotton-Bells{" "}
      <input
        className="SearchField12"
        onChange={(event) => setcottonbellesper(event.target.value)}
      ></input>
    </th>

    <th scope="col">Cotton-Seed</th>
    <th scope="col">Wastage Of Cotton</th>

    <th scope="col">cotton-seed</th>
    <th scope="col">OIL</th>
    <th scope="col">CottonSeedCAcake</th>
    <th scope="col">wastageOfseed</th>

     <th scope="col">OPRATION</th> 
  </tr>
</thead>
<tbody>
  {currentData.map((purchases) => (
    <tr>
      <th scope="row" className="th">
       
        {moment(new Date(purchases.data.date).toDateString()).format(
          "LL"
        )}
      </th>
      <th scope="row" className="th">
        
        {purchases.data.trucknumber}
      </th>
      <td className="th">
       
        {purchases.data.weight - purchases.data.outweight}
      </td>
      <td className="th">
       
        {((purchases.data.weight - purchases.data.outweight) * 33) /
          100}
      </td>
      <td className="th">
        
        {((purchases.data.weight - purchases.data.outweight) * 33) /
          100 /
          yess}
      </td>
      <td className="th">
       
        {((purchases.data.weight - purchases.data.outweight) * 66) /
          100}
      </td>
      <td className="th">
     
        {((purchases.data.weight - purchases.data.outweight) * 1) /
          100}
      </td>
      <td className="th">
        
        {((purchases.data.weight - purchases.data.outweight) * 66) /
          100}
      </td>
      <td className="th">
      
        {((((purchases.data.weight - purchases.data.outweight) * 66) /
          100) *
          10) /
          100}
      </td>
      <td className="th">
        
        {((((purchases.data.weight - purchases.data.outweight) * 66) /
          100) *
          85) /
          100}
      </td>
      <td className="th">
        
        {((((purchases.data.weight - purchases.data.outweight) * 66) /
          100) *
          5) /
          100}
      </td>
       <td className="th">
        OPRATION
        <Button>Edit</Button>
      </td> 
    </tr>
  ))}
</tbody>
</Table> */
}
{
  /* <div>
          <nav>
            <ul className="pagination">
              {pageNumber.map((number) => (
                <li className="pageitem" key={number}>
                  <a
                    onClick={() => setCurrent(number)}
                    className="pagelink"
                  >
                  {number}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div> */
}
