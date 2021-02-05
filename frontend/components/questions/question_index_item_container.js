import { connect } from "react-redux";
import { fetchVotes } from '../../actions/vote_actions';
import QuestionIndexItem from './question_index_item'

const mSTP = (state, {question}) => {
    return {
       question: question
    }
};

const mDTP = (dispatch) => ({
    fetchVotes: questionId => dispatch(fetchVotes(questionId)),
});

export default connect(mSTP, mDTP)(QuestionIndexItem);