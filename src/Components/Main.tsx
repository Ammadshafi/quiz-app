import React, { useState } from "react";
import { Api } from "../Services/Api";
import { ReturnApi } from "../Types/ApiType";

import Question from "./Question";
import "./Main.css";

const Main = () => {
  const [data, setdata] = useState<ReturnApi[]>([]);
  const [start, setstart] = useState<boolean>(false);
  const[amount,setamount]=useState<number>(10)

  const Apicall = async () => {
    if (amount>0) {
      const datas: ReturnApi[] = await Api(amount);
      setdata(datas);
      setstart(true);
    } else {
      alert("Amount must be greater than 0")
    }
  
  };

  if (!start) {
    return (
      <div className="shadow p-4 start text-capitalize text-center d-flex flex-column">
        <h1 className="text-success">welcome to Amd quiz game</h1>
        <label htmlFor="amount" className="text-capitallize fw-bold  my-4"><h4>write questions number</h4></label>
        <input type="number" className="mx-auto fw-bold text-center" name="amount" required value={amount} style={{maxWidth:"200px"}} placeholder="write the number of question you want" onChange={(e)=>setamount(parseInt(e.target.value))}/>
        <button onClick={Apicall} className="start-button my-2 mx-auto" style={{maxWidth:"100px"}}>
          start
        </button>
      </div>
    );
  } else {
    return <div>{<Question api={data} />}</div>;
  }
};

export default Main;
