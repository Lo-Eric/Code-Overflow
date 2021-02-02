import React from 'react';
import { Link, withRouter } from "react-router-dom";

class QuestionIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    
    // }

    render() {
        return (
            <section className="question-index-item">
             
                <div className="question-item-stats">
                    <h4>Votes</h4>
                    <h4>Answers</h4>
                    <h4>Views</h4>
                </div>
                <Link to={`/questions/${this.props.question.id}`}>
                    <li className="question-item">{this.props.question.title}</li>
                </Link>
            </section>
        )
    }
}

export default QuestionIndexItem;