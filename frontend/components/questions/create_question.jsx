import React from 'react';
import { connect } from "react-redux";
import Footer from '../splash/footer'
import LeftNavBar from '../left_nav_bar/left_nav'
import { Route, Redirect, withRouter } from 'react-router-dom';

class CreateQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const question = Object.assign({}, this.state);

        this.props.formType === "Create" ? 
        this.props
            .createQuestion(question)
            .then((question) => this.props.history.push(`/questions/${question.question.id}`))
        : this.props
            .updateQuestion(question)
            .then((question) => this.props.history.push(`/questions/${question.question.id}`))
    }

    render() {
        return (
          <form
            onSubmit={this.handleSubmit}
            className="create-question-form-container" 
          >
            <section className="question-header">
              {this.props.formType === "Edit" ? (<h1>Question update form</h1>) : (<h1>Ask a Public Question</h1> )}
              <div className="question-content">
                <label className="title2">
                  Title
                  <p>
                    Be specific and imagine you’re asking a question to another
                    person
                  </p>
                  <textarea
                    type="text"
                    value={this.state.title}
                    onChange={this.update("title")}
                    className="question-input" >
                  </textarea>
                </label>
                <label className="body2">
                  Body
                  <p>
                    Include all the information someone would need to answer
                    your question 
                  </p>
                  <textarea
                    type="text"
                    value={this.state.body}
                    onChange={this.update("body")}
                    className="question-input-body" >
                  </textarea>
                </label>
                <input
                  className="question-submit"
                  type="submit"
                  value="submit"
                />
              </div>
            </section>

            <section className="right">
              <div className="right_header">Step 1: Draft your question</div>
            </section>
            {/* </div> */}
          </form>
        );
    }
}

export default CreateQuestionForm;
