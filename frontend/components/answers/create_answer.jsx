import React from 'react';
import ReactQuill from 'react-quill';
import LeftNavBar from '../left_nav_bar/left_nav';
import parse from "html-react-parser";

class CreateAnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.answer;

    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.modules = {
      toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
      ],
      clipboard: {
        matchVisual: false,
      },
    };
  }

  //   componentDidMount() {
  //     debugger
  //     this.props.fetchQuestion(this.props.question);
  //   } 

  handleSubmit(e) {
    e.preventDefault();
    const parsedBody = {body: parse(this.state.body).props['children']};
    const questionId = {question_id: this.state.questionId}
    const answer = Object.assign({}, parsedBody, questionId);
    this.props
      .createAnswer(this.props.question.id, answer)
      .then(() => this.props.fetchQuestion(this.props.question.id))
      .then(() => this.setState({ body: ""}))
      // .then(()=> this.props.history.push(`/questions/${this.props.question.id}`))
  }

  updateState(value) {
    this.setState({ body: value });
  }

  render() {
    return (
      <form className="answer-form" onSubmit={this.handleSubmit}>
        <h2 className="answer-form-headline">Your Answer</h2>
        <ReactQuill
          class="ql-editor"
          modules={this.modules}
          formats={CreateAnswerForm.formats}
          value={this.state.body}
          onChange={this.updateState}
          // readOnly={true}
        />
        <input
          type="submit"
          className="answer-submit-btn"
          value="Post Your Answer"
        />
      </form>
    );
  }
}


CreateAnswerForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default CreateAnswerForm;