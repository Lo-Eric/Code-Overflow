import { RECEIVE_ANSWERS, RECEIVE_ANSWER, REMOVE_ANSWER } from '../actions/answer_actions';

const _nullAnswer = {};

const answersReducer = (state = _nullAnswer, action) => {
    switch (action.type) {
        case RECEIVE_ANSWERS:
            return Object.assign({}, state, action.answers);
        case RECEIVE_ANSWER:
            return Object.assign({}, state, { [action.answer.id]: action.answer });
        case REMOVE_ANSWER:
            let nextState = Object.assign({}, state);
            delete nextState[action.answer.id];
            return nextState;
        default:
            return state;
    }
};

export default answersReducer;


