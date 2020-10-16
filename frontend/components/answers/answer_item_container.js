import { connect } from "react-redux";
import { fetchAnswers } from '../../actions/answer_actions';
import AnswersShowForm from './answer_item'

const mSTP = (state, {answer, questionId}) => {
    return {
       questionId: questionId,
       answer: answer
    }
};

const mDTP = (dispatch) => ({
    fetchAnswers: questionId => dispatch(fetchAnswers(questionId)),
});

export default connect(mSTP, mDTP)(AnswersShowForm);