import { RECEIVE_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION } from '../actions/question_actions';
import { RECEIVE_QUESTION_VOTES } from '../actions/vote_actions';

const _nullQuestion = {};

const questionsReducer = (state = _nullQuestion, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return Object.assign({}, state, action.questions);
        case RECEIVE_QUESTION:
            return Object.assign({}, state, { [action.question.id]: action.question });
        case REMOVE_QUESTION:
            let nextState = Object.assign({}, state);
            delete nextState[action.questionId];
            return nextState;
        // case RECEIVE_QUESTION_VOTES: 
        default:
            return state;
    }
};
 
export default questionsReducer;


