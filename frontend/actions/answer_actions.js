import * as AnswerAPIUtil from '../util/answer_api_util';

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

export const receiveAnswers = (answers) => {
    return {
        type: RECEIVE_ANSWERS,
        answers
    };
};

export const receiveAnswer = (answer) => {
    return {
        type: RECEIVE_ANSWER,
        answer
    };
};

export const removeAnswer = (answerId) => {
    return {
        type: REMOVE_ANSWER,
        answerId
    };
};

export const fetchAnswers = () => (dispatch) => {
    return AnswerAPIUtil.fetchAnswers().then((res) => dispatch(receiveAnswers(res)));
};

// export const fetchQuestion = (questionId) => (dispatch) => {
//     return QuestionAPIUtil.fetchQuestion(questionId).then((res) => dispatch(receiveQuestion(res)));
// };


export const createAnswer = (questionId, answer) => (dispatch) => {
    return AnswerAPIUtil.createAnswer(questionId, answer).then((ans) => dispatch(receiveAnswer(ans)));
};

export const updateQuestion = (question) => (dispatch) => {
    return AnswerAPIUtil.updateAnswer(question).then((res) => dispatch(receiveQuestion(res)));
};


export const deleteAnswer = (questionId) => (dispatch) => {
    return AnswerAPIUtil.deleteAnswer(questionId).then(() => dispatch(removeQuestion(questionId)));
};