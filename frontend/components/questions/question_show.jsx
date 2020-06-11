import React from 'react';
import LeftNavBar from '../left_nav_bar/left_nav';

class QuestionShowForm extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount(){
        this.props.fetchQuestion(this.props.match.params.questionId);
        // this.props.fetchQuestion(this.props.question.id);
    }

    render () {
        if (!this.props.question) {
            return null
        }; 
        // debugger
        return (
            <div className='question-show-page'>
                <section className="left-nav-bar"><LeftNavBar /></section>

                <section className="question-content">
                <div className="question-title">{this.props.question.title}</div>
                <div className="question-body">{this.props.question.body}</div>
                </section>
            </div>
        )
    }
}

export default QuestionShowForm;