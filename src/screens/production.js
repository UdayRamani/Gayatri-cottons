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
  const [Purchase, setpurchase] = useState([]);
  const [cottonbellesper, setcottonbellesper] = useState("");

  const [Current, setCurrent] = useState(1);
  const [DataPerPage, setDataPerPage] = useState(5);
  const indexOfLastData = Current * DataPerPage;
  const indexOdFirstData = indexOfLastData - DataPerPage;
  const currentData = Purchase.slice(indexOdFirstData, indexOfLastData);
  const pageNumber = [];
  const finaldata = Purchase.length;

  //Pagination...................
  for (let i = 1; i <= Math.ceil(finaldata / DataPerPage); i++) {
    pageNumber.push(i);
  }

  //change Bells% ..........................
  var yes;
  var defaulvalue = 160;
  if (defaulvalue) {
    yes = defaulvalue;
  } else {
    yes = cottonbellesper;
  }
  var yess;
  if (!cottonbellesper) {
    yess = yes;
  } else {
    yess = cottonbellesper;
  }

  //DataBase
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

  return (
    <div>
      <Header />
      <div className="headerProduction">PRODUCTION</div>
      <Databses />
      <div className="header">ALL DATABASE</div>
      <div className="showPurchaseBox">
        <Table responsive striped bordered hover>
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

              {/* <th scope="col">OPRATION</th> */}
            </tr>
          </thead>
          <tbody>
            {currentData.map((purchases) => (
              <tr>
                <th scope="row" className="th">
                  {/* date */}
                  {moment(new Date(purchases.data.date).toDateString()).format(
                    "LL"
                  )}
                </th>
                <th scope="row" className="th">
                  {/* Truck */}
                  {purchases.data.trucknumber}
                </th>
                <td className="th">
                  {/* cotton */}
                  {purchases.data.weight - purchases.data.outweight}
                </td>
                <td className="th">
                  {/*Cotton-Bells-weight	 */}
                  {((purchases.data.weight - purchases.data.outweight) * 33) /
                    100}
                </td>
                <td className="th">
                  {/* Total Cotton-Bells */}
                  {((purchases.data.weight - purchases.data.outweight) * 33) /
                    100 /
                    yess}
                </td>
                <td className="th">
                  {/* Cotton-Seed */}
                  {((purchases.data.weight - purchases.data.outweight) * 66) /
                    100}
                </td>
                <td className="th">
                  {/* Wastage Of Cotton */}
                  {((purchases.data.weight - purchases.data.outweight) * 1) /
                    100}
                </td>
                <td className="th">
                  {/* cotton-seed */}
                  {((purchases.data.weight - purchases.data.outweight) * 66) /
                    100}
                </td>
                <td className="th">
                  {/* OIL */}
                  {((((purchases.data.weight - purchases.data.outweight) * 66) /
                    100) *
                    10) /
                    100}
                </td>
                <td className="th">
                  {/* CottonSeedCAcake */}
                  {((((purchases.data.weight - purchases.data.outweight) * 66) /
                    100) *
                    85) /
                    100}
                </td>
                <td className="th">
                  {/* wastageOfseed */}
                  {((((purchases.data.weight - purchases.data.outweight) * 66) /
                    100) *
                    5) /
                    100}
                </td>

                {/* <td className="th">
                  OPRATION
                  <Button>Edit</Button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
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
        </div>
      </div>
    </div>
  );
}

export default Production;
