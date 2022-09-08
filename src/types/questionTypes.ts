import {questions} from '@prisma/client'

export type CreateQuestionsData = Omit<questions, 'id'>;