import { connect } from "react-redux";
import { createAnswer } from '../../actions/answer_actions';
import {}

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

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);