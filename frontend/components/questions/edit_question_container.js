import { connect } from "react-redux";
import { updateQuestion } from "../../actions/question_actions";
import CreateQuestionForm from "./create_question";

const mapStateToProps = (state, ownProps) => ({
  question: state.entities.questions[ownProps.match.params.questionId],
  formType: "Edit"
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuestion: (question) => dispatch(updateQuestion(question)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionForm);
