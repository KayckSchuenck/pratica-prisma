import { Request, Response } from 'express';
import { createQuestionService,getAllQuestions } from '../services/questionService.js';
import { createAnswerService,getAnswers } from '../services/answerService.js';

export async function createQuestion(req: Request, res: Response) {
  const {askedBy,question}=req.body
  await createQuestionService(askedBy,question)
  res.sendStatus(201)
}

export async function createAnswer(req: Request, res: Response) {
  const {answeredBy,answer}=req.body
  const {id}=req.params
  await createAnswerService(answeredBy,answer,Number(id))
  res.sendStatus(201)
}

export async function get(req: Request, res: Response) {
  const result= await getAllQuestions()
  res.status(200).send(result)
}

export async function getById(req: Request, res: Response) {
  const {id}=req.params
  const result= await getAnswers(Number(id))
  res.status(200).send(result)
}
