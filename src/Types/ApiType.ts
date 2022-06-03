export type QuizApi={
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers:string[]
    question: string
    type: string
}
export interface ReturnApi{
answer?: string
option?:string[]
question?: string
}