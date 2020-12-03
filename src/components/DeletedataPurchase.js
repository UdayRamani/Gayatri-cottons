import React ,{useState ,useEffect}from "react";
import { db } from "../config/fire";
import { Button } from "react-bootstrap";
import { Printer } from "react-bootstrap-icons";
import "../styles/Showpurchase.css";


function DaletedataPurchase({ Purchase  })
 {
  const [DisData, setDisData] = useState([]);

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

  var disid=0;
  DisData.map((disdatas)=>{
    disid=disdatas.id;
  })

  const onDelete = (e) => {
    e.preventDefault();
    db.collection("Purchase").doc(Purchase.id).delete()

    db.collection("Purchase")
        .doc(Purchase.id)
        .collection("DistributeAmount")
        .doc(disid)
        .delete()
    }
//Delete Data

  return (
    <div >
      <form>
        <div className="dataweightBox">  
        <Button onClick={onDelete} className="deleteBtn">DELETE</Button>
        </div>
      </form>
    </div>
  );
}
export default DaletedataPurchase;
