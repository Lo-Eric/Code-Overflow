import { connect } from "react-redux";
import { fetchQuestions } from '../../actions/question_actions';
import QuestionsIndex from './questions_index';

const mapStateToProps = state => ({
    question: {
        title: '',
        body: '',
    }
});

const mapDispatchToProps = dispatch => ({
    createQuestion: (question) => dispatch(createQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);

