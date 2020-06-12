import { connect } from "react-redux";
import { createQuestion } from '../../actions/question_actions';
import QuestionsIndex from './questions_index';
import CreateQuestionForm from './create_question';

const mapStateToProps = state => ({
    question: {
        title: '',
        body: '',
    }
});

const mapDispatchToProps = dispatch => {
    return {
    createQuestion: (question) => dispatch(createQuestion(question))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionForm);

