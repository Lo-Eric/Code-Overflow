import React from 'react';
import { connect } from "react-redux";
import Footer from '../splash/footer'
import LeftNavBar from '../left_nav_bar/left_nav'
import { Route, Redirect, withRouter } from 'react-router-dom';

class CreateQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            views: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const question = Object.assign({}, this.state);
        this.props.createQuestion(question)
            // .then(()=> console.log(this.state))
            // .then(()=> <Redirect to='/home'/>)
            .then((question) => this.props.history.push(`/questions/${question.question.id}`))
        // .then(()=> console.log("success"));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="create-question-form-container">

                <section className="question-header">
                    <h1>Ask a Public Question</h1>
                    <div className="question-content">
                        <label>Title:
                            <input type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    className="question-input"
                                />
                        </label>
                        <label>Body:
                            <input type="text"
                                    value={this.state.body}
                                    onChange={this.update('body')}
                                    className="question-input"
                                />
                        </label>
                         <input className="question-submit" type="submit" value="submit" /> 
                    </div>
                </section>

                <section className="right">
                    <div className="right_header">Step 1: Draft your question</div>
                </section>
            {/* </div> */}
            </form>
        )
    }
}

export default CreateQuestionForm;
