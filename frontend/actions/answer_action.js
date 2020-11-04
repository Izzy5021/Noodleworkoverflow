import { getAnswers, newAnswer, deleteAnswer, updateAnswer, getAnswer } from '../utils/answer_api_util';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const POST_ANSWER = 'POST_ANSWER';
// export const SHOW_QUESTION = 'SHOW_QUESTION';

const receiveAllAnswers = answers => ({
    type: RECEIVE_ALL_ANSWERS,
    answers
});

const receiveAnswer = answer => ({
    type: RECEIVE_ANSWER,
    answer
});

const postAnswer = answer => ({
    type: POST_ANSWER,
    answer
});

// const openQuestion = id => ({
//     type: SHOW_QUESTION,
//     id
// });
export const eraseAnswer = id => dispatch => deleteAnswer(id);
   

export const createAnswer = answer => dispatch => newAnswer(answer)
    .then(createdAnswer => dispatch(postAnswer(createdAnswer)));

export const patchAnswer = (id,answer) => dispatch => {
    return updateAnswer(id, answer)
        .then(updatedAnswer => dispatch(receiveAnswer(updatedAnswer)));
};

export const fetchAnswer = (id) => dispatch => {
    return getAnswer(id)
        .then(answer => dispatch(receiveAnswer(answer)));
};
    
export const fetchAnswers = () => dispatch => {
    return getAnswers()
        .then(answers => dispatch(receiveAllAnswers(answers)));
};

// export const fetchQuestions = () => dispatch => {
//     return getQuestions()
//         .then(questions => dispatch(receiveAllQuestions(questions)));
// };
// export const showQuestion = (id) => dispatch => {
//     return getQuestion(id)
//         .then(question => dispatch(openQuestion(question)));
// }


