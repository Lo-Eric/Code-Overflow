import React from 'react';
import LeftNavBar from '../left_nav_bar/left_nav';
import AnswerFormContainer from '../answers/create_answer_container'

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
        
        return (
            <div className='question-show-page'>
                <section className="left-nav-bar"><LeftNavBar /></section>

                <section className="question-content-2">
                    <div className="question-title">{this.props.question.title}</div>
                    <div className="divider">.</div>
                    <div className="question-body">{this.props.question.body}</div>
                    <AnswerFormContainer question={this.props.question} />
                </section>

                <section className="right-nav-bar">
                    <div className="right-nav-header">Watched Tags</div>
                </section>
                
                
            </div>
        )
    }
}

export default QuestionShowForm;