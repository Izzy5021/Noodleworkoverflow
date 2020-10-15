import { getQuestions, getQuestion, newQuestion } from '../utils/question_api_util';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const POST_QUESTION = 'POST_QUESTION';


const receiveAllQuestions = questions => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
});

const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
});

const postQuestion = question => ({
    type: POST_QUESTION,
    question
});

export const createQuestion = question => dispatch => newQuestion(question)
    .then(createdQuestion => dispatch(postQuestion(createdQuestion)));



export const fetchQuestion = (questionId) => dispatch => {
        return getQuestion(questionId)
            .then(question => dispatch(receiveQuestion(question)));
};
    
export const fetchQuestions = () => dispatch => {
    return getQuestions()
        .then(questions => dispatch(receiveAllQuestions(questions)));
};