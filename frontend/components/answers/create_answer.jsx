import React from 'react';
import ReactQuill from 'react-quill';
import LeftNavBar from '../left_nav_bar/left_nav';

class CreateAnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        }
        
        this.updateState = this.updateState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const answer = Object.assign({}, this.state);
        this.props.createAnswer( this.props.question.id, answer )
    }

    updateState(value){
        this.setState({ body: value })
    }

    render() {
        return (
          <form className="answer-form" onSubmit={this.handleSubmit}>
            <h2 className="answer-form-headline">Your Answer</h2>
            <ReactQuill
              modules={CreateAnswerForm.modules}
              formats={CreateAnswerForm.formats}
              value={this.state.body}
              onChange={this.updateState}
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

CreateAnswerForm.modules = {
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