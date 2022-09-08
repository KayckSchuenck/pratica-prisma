import { prisma } from "../config/database"
import { CreateQuestionsData } from "../types/questionTypes.js"

export async function insertQuestion(questionData:CreateQuestionsData){
    await prisma.questions.create({
        data:questionData
    })
}

export async function getQuestions() {
    const questions= await prisma.questions.findMany()
    return questions
}