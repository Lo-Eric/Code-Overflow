import React from 'react';
import { connect } from "react-redux";
import Footer from '../splash/footer'
import LeftNavBar from '../left_nav_bar/left_nav'

class CreateQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const question = Object.assign({}, this.state);
        this.props.createQuestion(question)
        .then(()=> <Redirect to='/home'/>);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="create-question-form-container">
            <div className="create-question-form">
                <section className="left-nav-bar"><LeftNavBar/></section>

                <section className="question-content">
                    <h1>Ask a Public Question</h1>
                    <div>
                        <label>Title
                            <input type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    className="title-input"
                                />
                        </label>
                        <label>Body
                            <input type="text"
                                    value={this.state.body}
                                    onChange={this.update('body')}
                                    className="body-input"
                                />
                        </label>
                         <input className="question-submit" type="submit" value="submit" /> 
                    </div>
                </section>
            </div>
            </form>
        )
    }
}

export default CreateQuestionForm;
