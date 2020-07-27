import { connect } from "react-redux";
import { createAnswer } from '../../actions/answer_actions';
import { CreateAnswerForm } from './create_answer';

const mSTP = (state) => {
    return {
        answer: {
            body: "",
        }
    }
    
}

const mDTP = (dispatch) => ({
    createAnswer: (answer, questionId) => dispatch(createAnswer(answer, questionId)),
});

export default connect(mSTP, mDTP)(CreateAnswerForm);