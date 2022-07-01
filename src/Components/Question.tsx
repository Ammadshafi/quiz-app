import React from "react";
import { useState,useEffect } from "react";
import { ReturnApi } from "../Types/ApiType";
import"./Question.css"
type props = {
  api: ReturnApi[]

};
type userAnswer={
  question:string|undefined,
  answer:string|undefined,
  useranswer:string,
}
const Question: React.FC<props> = ({ api }) => {
  const[gameOver,setGameOver]=useState(false)
    const [quesnum,setquesnum]=useState<number>(0)
    const[dataobj,setdataobj]=useState<ReturnApi>(api[quesnum])
    const [userAnswer,setuserAnswer]=useState<userAnswer>()
    const[ score,setscore]=useState<number>(0)
  useEffect(()=>{
    setdataobj(api[quesnum])
    if(userAnswer?.answer===userAnswer?.useranswer){
      setscore(score+1)
    }
  },[quesnum])
  
  
   const TotalQuestion=api.length
  


  const Submit=(e:any)=>{
    
   const answerobj:userAnswer={
      question:dataobj.question,
      answer:dataobj.answer,
      useranswer:e.target.value

    }
    setuserAnswer(answerobj)
    if (api.length>quesnum+1) {
      
      setquesnum(quesnum+1) 
    } else {
      setGameOver(true)
    }
  
   
  
  }
  {
    if(gameOver){
    return( <div className="question-card shadow p-5 text-center">
    {score==api.length-5?<h1 className="text-primary text-capitalze shadow">Better but not best </h1>:score>=api.length-3?<h1 className="text-success text-uppercase shadow">hyyy!!you won the game</h1>:<h1 className="text-danger text-capitalize shadow">Opps!!you lose the game</h1>}
    <h2>{score}</h2>
    <button className='btn btn-round border btn-success text-capitalize'onClick={()=>window.location.reload()}>play again</button>
    </div> 
    )
    }
    else{
      return (
   
        <div className="question-card shadow p-5">
          <h5 className="text-danger text-center ">{quesnum+1}/{TotalQuestion}</h5>
          <h4 className="text-success">{dataobj.question}</h4>
          <div className="d-flex flex-column">
          {dataobj.option?.map((cur)=><button className="text-center my-2 option-button" value={cur} key={cur} onClick={Submit}>{cur}</button>)}
          </div>
        </div>
      );
    }
  }}
 
// };

export default Question;
