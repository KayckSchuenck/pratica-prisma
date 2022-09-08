
import { insertQuestion,getQuestions } from "../repositories/questionRepository.js";

export async function createQuestionService(askedBy:string,question:string){
    await insertQuestion({askedBy,question})
}

export async function getAllQuestions(){
    const questions=await getQuestions()
    return {questions}
}