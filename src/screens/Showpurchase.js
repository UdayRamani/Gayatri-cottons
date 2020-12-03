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
  const [DataPerPage, setDataPerPage] = useState(10);
 
  const [Search, setSearch] = useState("");
  const [SearchTruck, setSearchTruck] = useState("");


  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 15, value: 15 },
    { label: 20, value: 20 },
    { label: 25, value: 25 },
  ]);
  const [value, setValue] = React.useState(5);

  const indexOfLastData = Current * value;
  const indexOdFirstData = indexOfLastData - value;
  const currentData = Purchase.slice(indexOdFirstData, indexOfLastData);
  const pageNumber = [];
  const finaldata = Purchase.length;

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

  function Showsiamonut({ Purchase }) {
    const [DisData, setDisData] = useState([]);
    const [Purchasee, setpurchasee] = useState([]);
    useEffect(() => {
      db.collection("Purchase")
        .doc(Purchase.id)
        .get()
        .then((doc) => {
          if (doc && doc.exists) {
            const mydata = [doc.data()];
            console.log(doc.id, "=>", doc.data());
            setpurchasee(mydata);
          }
        })
        .catch((err) => {
          console.log("Error getting documents", err);
        });
      return () => {};
    }, []);
    var datapurchaseeee = 0;
    Purchasee.map(
      (Purchassss) => (datapurchaseeee = Purchassss.totalrupee)
    );

    useEffect(() => {
      db.collection("Purchase")
        .doc(Purchase.id)
        .collection("DistributeAmount")
        .onSnapshot((snapshot) =>
          setDisData(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
      return () => {};
    }, []);

    var disamounts = 0;
    DisData.map((Disdatas) => (disamounts += +Disdatas.data.amountDis));
    console.log(DisData);
    var DisssAmount=datapurchaseeee - disamounts;
    var totalDisAMount = Math.round(DisssAmount);
    return <div>{totalDisAMount}</div>;
  }

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
  for (let i = 1; i <= Math.ceil(finaldata / value); i++) {
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
      <div className="dropDivrowdata">
        <select
          className="dropdownMenuforrowdata"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        >
          {items.map(({ label, value }) => (
            <option
              className="OptionsDropDownrowdata"
              key={value}
              value={value}
            >
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="showPurchaseBox">
        <Table responsive striped bordered hover>
          <thead className="bodytable">
            <tr>
              {/* <th scope="col">
                <h5>User Email</h5>{" "}
              </th> */}
              <th scope="col">
                <h5>Date</h5>{" "}
              </th>
              <th scope="col">
                <h6>TruckNumber</h6>
              </th>
              <th scope="col">
                <h6>Products</h6>
              </th>
              <th scope="col">
                <h6>Weight(kg)</h6>
              </th>
              {/* <th scope="col">
                <h6>Out Weight</h6>
              </th> */}
              {/* <th scope="col">
                <h6>Total Weight</h6>
              </th> */}
              <th scope="col">
                <h6>Price</h6>
              </th>
              <th scope="col">
                <h6>Total-Rupee</h6>
              </th>
              <th scope="col">
                <h6>PartyName</h6>
              </th>
              <th scope="col">
                <h6>Dis-Amount</h6>
              </th>
              <th scope="col">
                <h6>Total Dis-Amount</h6>
              </th>
              {/* <th scope="col">
                <h6>PaymentDate</h6>
              </th> */}
              <th scope="col">
                <h6>BrokerName</h6>
              </th>
              <th scope="col">
                <h6>Operation</h6>
              </th>
            </tr>
          </thead>
          <tbody>
            {searchdata.map((purchases) => (
              <tr>
                {/* <td className="th">{purchases.data.currentUser}</td> */}

                <th scope="row" className="th">
                  {moment(new Date(purchases.data.date).toDateString()).format(
                    "DD-MM-YYYY"
                  )}
                </th>
                <td className="th">{purchases.data.trucknumber}</td>
                <td className="th">{purchases.data.cottonInput}</td>
                <td className="th">{purchases.data.weight+" kg"}</td>
                {/* <td className="th">
                  <ShowDatevise Purchase={purchases} />
                </td> */}
                {/* <td className="th">
                  {purchases.data.weight - purchases.data.outweight}
                </td> */}
                <td className="th">{purchases.data.price}</td>
                <td className="th">{purchases.data.totalrupee}</td>
                <td className="th">{purchases.data.partiname}</td>
                {/* <td className="th">{purchases.data.farmername}</td> */}
                <ShowDatevise Purchase={purchases} />
                <td className="th">
                  <Showsiamonut Purchase={purchases} />
                  <Button
                    href={"/EditDistributAmount/" + purchases.id}
                    className="addweightbtn"
                  >
                    Add
                  </Button>
                </td>
                {/* <td className="th">
                  {moment(
                    new Date(purchases.data.paymentdate).toDateString()
                  ).format("LL")}
                </td> */}
                <td className="th">{purchases.data.brokername}</td>
                <td className="th">
                  <DeletedataPurchase Purchase={purchases} />
                  <Button
                    href={"/editdataPurchase/" + purchases.id}
                    className="editBtn"
                  >
                    EDIT
                  </Button>
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
