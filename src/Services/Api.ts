import axios from "axios";
import { QuizApi, ReturnApi } from "../Types/ApiType";
const suffleArray=(array:string[])=>{
return array.sort()
}
export const Api = async (amount:number):Promise<ReturnApi[]>=> {
  const Response = await axios(
    `https://opentdb.com/api.php?amount=${amount}&difficulty=easy&type=multiple`
  );
  const data: QuizApi[] = Response.data.results;

  const quiz:ReturnApi[] = data.map((Quiz: QuizApi) => {
    const { correct_answer, incorrect_answers, question } = Quiz;
   const options=suffleArray([...incorrect_answers,correct_answer])
    return {
      answer: correct_answer,
      option:options,
      question: question,
    };
  });
  return quiz
};
