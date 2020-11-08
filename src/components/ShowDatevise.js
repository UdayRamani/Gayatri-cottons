import React ,{useState}from "react";
import "../styles/ShowDatevise.css";
import { db } from "../config/fire";

function ShowDatevise({ Purchase }) {
  const [OutWeight, setoutWeight] = useState();
  const handleSetOutWeight = (e) => {
    e.preventDefault();
    db.collection("Purchase").doc(Purchase.id).update({
      outweight: OutWeight,
    });
    setoutWeight("");
  };
//Show Data
  return (
    <div >
      <form>
        <div className="dataweightBox">  
          <input
          placeholder={Purchase.data.outweight}
          value={OutWeight}
          className="inputOutWeight"
          onChange={(e) => setoutWeight(e.target.value)}
        />
        <button onClick={handleSetOutWeight} className="addweightbtn">Add</button>
        </div>

      </form>
    </div>
  );
}

export default ShowDatevise;
