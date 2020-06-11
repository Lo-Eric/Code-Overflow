import React from 'react';
import LeftNavBar from '../left_nav_bar/left_nav';

class QuestionShowForm extends React.Component {
    constructor(props) {
        super(props);
        // this.props.fetchQuestion(this.props.match.params.questionId);
    };

    componentDidMount(){
        this.props.fetchQuestion(this.props.match.params.questionId);
    }
    render () {
    
        return (
            <div className='question-contents'>
                <section className="left-nav-bar"><LeftNavBar /></section>

                <section className="question-title">{this.props.question.title}</section>
            </div>
        )
    }
}

export default QuestionShowForm;