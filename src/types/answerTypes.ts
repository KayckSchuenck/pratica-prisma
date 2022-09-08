import {answers} from '@prisma/client'

export type CreateAnswersData = Omit<answers, 'id'>;