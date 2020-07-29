import { connect } from "react-redux";
import { createAnswer } from '../../actions/answer_actions';
import CreateAnswerForm  from './create_answer';

const mSTP = (state) => {
    return {
        // answer: {
        //     body: "",
         // }
        errors: state.errors.answers,
        
    }
    
}

const mDTP = (dispatch) => ({
    createAnswer: ( questionId, answer ) => dispatch(createAnswer( questionId, answer )),
});

export default connect(mSTP, mDTP)(CreateAnswerForm);