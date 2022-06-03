
import axios from "axios";
import { QuizApi, ReturnApi } from "../Types/ApiType";
export const Api = async (amount:number):Promise<ReturnApi[]>=> {
  const Response = await axios(
    `https://opentdb.com/api.php?amount=${amount}&difficulty=easy&type=multiple`
  );
  const data: QuizApi[] = Response.data.results;

  const quiz:ReturnApi[] = data.map((Quiz: QuizApi) => {
    const { correct_answer, incorrect_answers, question } = Quiz;
    return {
      answer: correct_answer,
      option: [...incorrect_answers,correct_answer],
      question: question,
    };
  });
  return quiz
};
