import React from 'react';
import { Link } from 'react-router-dom';
import QuestionIndexItem from './question_index_item';

class QuestionsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        debugger
        this.props.fetchQuestions();
    }

    render(){
        debugger
        return (
            <section className="questions-index">
            <h2>Top Questions</h2>
            <ul>
                {this.props.questions.map((question, idx) => (
                    <QuestionIndexItem key={idx} question={question}/>
                ))}    
            </ul>
            </section>
        )
    }
}

export default QuestionsIndex;
