import * as QuestionAPIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
};

export const receiveQuestion = (question) => {
    return {
        type: RECEIVE_QUESTION,
        question
    };
};

export const removeQuestion = (questionId) => {
    return {
        type: REMOVE_QUESTION,
        questionId
    };
};

export const fetchQuestions = () => (dispatch) => {
    return QuestionAPIUtil.fetchQuestions().then((res) => dispatch(receiveQuestions(res)));
};

export const fetchQuestion = (questionId) => (dispatch) => {
    return QuestionAPIUtil.fetchQuestion(questionId).then((res) => dispatch(receiveQuestion(res)));
};


export const createQuestion = (question) => (dispatch) => {
    return QuestionAPIUtil.createQuestion(question).then((res) => dispatch(receiveQuestion(res)));
};

export const updateQuestion = (question) => (dispatch) => {
    return QuestionAPIUtil.updateQuestion(question).then((res) => dispatch(receiveQuestion(res)));
};


export const deleteQuestion = (questionId) => (dispatch) => {
    return QuestionAPIUtil.deleteQuestion(questionId).then(() => dispatch(removeQuestion(questionId)));
}; 