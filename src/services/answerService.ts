// TODO

import { insertAnswer,getAnswerById } from "../repositories/answerRepository.js";

export async function createAnswerService(answeredBy:string,answer:string,questionId:number){
    await insertAnswer({answeredBy,answer,questionId})
}

export async function getAnswers(id:number){
    const answers= await getAnswerById(id)
    const answer={
        id,
        askedBy:answers[0].askedBy,
        question:answers[0].question,
        answers:answers.map(({answer,answeredBy})=>{
            return {
                answeredBy,
                answer
            }
        })
    }
    return answer
}