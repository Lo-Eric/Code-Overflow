import { connect } from "react-redux";
import { createAnswer } from '../../actions/answer_actions';
import CreateAnswerForm  from './create_answer';
import { fetchQuestion } from '../../actions/question_actions';

const mSTP = (state, {question}) => {
    return {
      answer: {
        body: "",
        questionId: question.id,
      },
      question: question
    };
}

const mDTP = (dispatch) => {
    return {
    createAnswer: ( questionId, answer ) => dispatch(createAnswer( questionId, answer )),
    fetchQuestion: questionId => dispatch(fetchQuestion(questionId))
  }
};

export default connect(mSTP, mDTP)(CreateAnswerForm);