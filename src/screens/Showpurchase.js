import React, { useState, useEffect } from "react";
import { db } from "../config/fire";
import "../styles/Showpurchase.css";
import moment from "moment";
import ShowDatevise from "../components/ShowDatevise";
import Header from "../components/Header.js";
import { Button, Pagination, Table } from "react-bootstrap";
import DeletedataPurchase from "../components/DeletedataPurchase";
import Serch from "./SerchPurchase";
import { Input } from "@material-ui/core";
import { Link } from "react-router-dom";
import EditPurchaseDate from "../components/EditPurchaseData";
function Showpurchase() {
  const [Purchase, setpurchase] = useState([]);

  const [Current, setCurrent] = useState(1);
  const [DataPerPage, setDataPerPage] = useState(5);

  const indexOfLastData = Current * DataPerPage;
  const indexOdFirstData = indexOfLastData - DataPerPage;
  const currentData = Purchase.slice(indexOdFirstData, indexOfLastData);
  const pageNumber = [];
  const finaldata = Purchase.length;
  const [Search, setSearch] = useState("");
  const [SearchTruck, setSearchTruck] = useState("");
  
  let searchdata = currentData;

  // Show Data.....................

  useEffect(() => {
    db.collection("Purchase")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) =>
        setpurchase(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
    return () => {};
  }, []);

  //Search.............
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearch1 = (e) => {
    e.preventDefault();
    setSearchTruck(e.target.value);
  };

  if (Search.length > 0) {
    searchdata = searchdata.filter((i) => {
      return i.data.partiname.match(Search);
    });
  }

  if (SearchTruck.length > 0) {
    searchdata = searchdata.filter((i) => {
      return i.data.trucknumber.match(SearchTruck);
    });
  }

  //Pagination...................
  for (let i = 1; i <= Math.ceil(finaldata / DataPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <Header />
      <div className="text">PURCHASE DATA</div>
      <div className="allSearch">
        <div className="searchInputBox">
          <input
            type="text"
            placeholder="Search by Party Name..."
            onChange={handleSearch}
            value={Search}
            className="SearchField"
          />
        </div>
        <div className="inputsearchbox2">
          <input
            type="text"
            placeholder="Search by Truck Number.."
            onChange={handleSearch1}
            value={SearchTruck}
            className="SearchField1"
          />
        </div>
      </div>
    
      <div className="showPurchaseBox">
        <Table responsive striped bordered hover>
          <thead className="bodytable">
            <tr>
              <th scope="col"><h5>Date</h5> </th>
              <th scope="col"><h6>TruckNumber</h6></th>
              <th scope="col"><h6>In Weight</h6></th>
              <th scope="col"><h6>Out Weight</h6></th>
              <th scope="col"><h6>Total Cotton Weight</h6></th>
              <th scope="col"><h6>Price</h6></th>
              <th scope="col"><h6>Total-Rupee</h6></th>
              <th scope="col"><h6>PartyName</h6></th>
              <th scope="col"><h6>FarmerName</h6></th>
              <th scope="col"><h6>Distribute-Amount</h6></th>
              <th scope="col"><h6>PaymentDate</h6></th>
              <th scope="col"><h6>BrokerName</h6></th>
              <th scope="col"><h6>Operation</h6></th>
            </tr>
          </thead>
          <tbody>
            {searchdata.map((purchases) => (
              <tr>
                <th scope="row" className="th">
                  {moment(new Date(purchases.data.date).toDateString()).format(
                    "LL"
                  )}
                </th>
                <td className="th">{purchases.data.trucknumber}</td>
                <td className="th">{purchases.data.weight}</td>

                <td className="th">
                  <ShowDatevise Purchase={purchases} />
                </td>
                <td className="th">
                  {purchases.data.weight - purchases.data.outweight}
                </td>
                <td className="th">{purchases.data.price}</td>
                <td className="th">{purchases.data.totalrupee}</td>
                <td className="th">{purchases.data.partiname}</td>
                <td className="th">{purchases.data.farmername}</td>
                <td className="th">{purchases.data.disamount}</td>
                <td className="th">
                  {moment(
                    new Date(purchases.data.paymentdate).toDateString()
                  ).format("LL")}
                </td>
                <td className="th">{purchases.data.brokername}</td>
                <td className="th">
                  <DeletedataPurchase Purchase={purchases} />
                  {/* <Link to={{pathname: `/editdata/${purchases.id}`}}> */}
                   <Button href={'/editdataPurchase/'+purchases.id} className="editBtn">EDIT</Button>
                  {/* </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          <nav>
            <ul className="pagination">
              {pageNumber.map((number) => (
                <li className="pageitem" key={number}>
                  <a onClick={() => setCurrent(number)} className="pagelink">
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Showpurchase;
