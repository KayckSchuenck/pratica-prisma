import { prisma } from "../config/database"
import { CreateAnswersData } from "../types/answerTypes.js"

export async function insertAnswer(answerData:CreateAnswersData){
    await prisma.answers.create({
        data:answerData
    })
}

export async function getAnswerById(questionId:number){
    const getAnswer = await prisma.answers.findMany({
        where: {questionId},
        include:{
            questions: {
                select: {
                  question: true,
                  askedBy:true
                },
              },
        }
      })
      return getAnswer
}