import React, { useState, useEffect } from "react";
import { db } from "../config/fire";
import "../styles/Showpurchase.css";
import "../styles/ShowSellingData.css";
import moment from "moment";
import Header from "../components/Header.js";
import { Button, Table } from "react-bootstrap";
import DeleteDataSelling from "../components/DeleteDataSelling";

function ShowSellingData() {
  const [Selling, setSelling] = useState([]);
  const [Search, setSearch] = useState("");
  const [SearchBill, setSearchBill] = useState("");
  const [Current, setCurrent] = useState(1);
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 15, value: 15 },
    { label: 20, value: 20 },
    { label: 25, value: 25 },
  ]);
  const [value, setValue] = React.useState(5);
  var valuesdata=value;
  console.log(valuesdata);
  const [DataPerPage, setDataPerPage] = useState(valuesdata);
  const indexOfLastData = Current * value;
  const indexOdFirstData = indexOfLastData - value;
  const currentData = Selling.slice(indexOdFirstData, indexOfLastData);
  const pageNumber = [];
  const finaldata = Selling.length;

  useEffect(() => {
    db.collection("Selling")
      .orderBy("sellingdate", "desc")
      .onSnapshot((snapshot) =>
        setSelling(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
    return () => {};
  }, []);

  let searchdata = currentData;
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearch1 = (e) => {
    e.preventDefault();
    setSearchBill(e.target.value);
  };

  if (Search.length > 0) {
    searchdata = searchdata.filter((i) => {
      return i.data.partiname.match(Search);
    });
  }
  if (SearchBill.length > 0) {
    searchdata = searchdata.filter((i) => {
      return i.data.billNo.match(SearchBill);
    });
  }

  //Pagination...................
  for (let i = 1; i <= Math.ceil(finaldata / value); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <Header />
      <div className="text">SELLING DATA</div>
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
            placeholder="Search by Bill Number.."
            onChange={handleSearch1}
            value={SearchBill}
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
              {/* <th scope="col">User Email </th> */}
              <th scope="col">Date </th>
              <th scope="col">Bill-No</th>
              <th scope="col">Product</th>
              <th scope="col">PartyName</th>
              <th scope="col">Weight(kg)</th>
              <th scope="col">Price</th>
              <th scope="col">Total-Rupee</th>
              <th scope="col">BrokerName</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            {searchdata.map((Selling) => (
              <tr>
                {/* <td className="th">{Selling.data.currentUser}</td> */}
                <th scope="row" className="th">
                  {" "}
                  {moment(
                    new Date(Selling.data.sellingdate).toDateString()
                  ).format("DD-MM-YYYY")}
                </th>

                <td className="th">{Selling.data.billNo}</td>
                <td className="th">{Selling.data.sellProduct}</td>
                <td className="th">{Selling.data.partiname}</td>
                <td className="th">{Selling.data.weight+" kg"}</td>
                <td className="th">{Selling.data.price}</td>
                <td className="th">{Selling.data.totalrupee}</td>
                <td className="th">{Selling.data.brokername}</td>
                <td className="th">
                  {" "}
                  <DeleteDataSelling Selling={Selling} />
                  <Button
                    href={"/editdataSelling/" + Selling.id}
                    className="editBtn"
                  >
                    EDIT
                  </Button>
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

export default ShowSellingData;
