import React from 'react';
import LeftNavBar from '../left_nav_bar/left_nav';

class CreateAnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.answer;
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const answer = Object.assign({}, this.state);
        this.props.createAnswer( this.props.question.id, answer )
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="create-answer-form-container">

                {/* <section className="answer-header"> */}
                    <h3>Your Answer</h3>
                    <div className="answer-content">
                        <label>Body:
                            <input type="text"
                                value={this.state.body}
                                onChange={this.update('body')}
                                className="answer-input"
                            />
                        </label>
                       
                    </div>
                {/* </section> */}
                <br />
                <button id="post-answer-btn" type="submit">
                    Post Your Answer
                </button>
                <br />
            </form>
        )
    }

}

export default CreateAnswerForm;