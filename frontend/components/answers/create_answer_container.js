import { connect } from "react-redux";
import { createAnswer } from '../../actions/answer_actions';
import CreateAnswerForm  from './create_answer';

const mSTP = (state, {question}) => {
    debugger
    return {
      // answer: {
      //     body: "",
      // }
      // errors: state.errors.answers,
      question_id: question.id
    };
}

const mDTP = (dispatch) => {
    debugger
    return {
    createAnswer: ( questionId, answer ) => dispatch(createAnswer( questionId, answer )),
    }
};

export default connect(mSTP, mDTP)(CreateAnswerForm);