import React from 'react';
import { Link, withRouter } from "react-router-dom";

class QuestionIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     this.props.fetchVotes(this.props.question.id)
    // }

    render() {
        if (!this.props.question.votes) {
          return null
        }; 

        return (
            <section className="question-index-item">
             
                <div className="question-item-stats">
                    <h4>{this.props.question.votes.length}
                        <br/>Votes</h4>
                    <h4>{this.props.question.answers.length}
                        <br/>Answers</h4>
                    <h4>0
                        <br/>Views</h4>
                </div>
                <Link to={`/questions/${this.props.question.id}`}>
                    <li className="question-item">{this.props.question.title}</li>
                </Link>
            </section>
        )
    }
}

export default QuestionIndexItem;