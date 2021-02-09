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
             
                {/* <div className="question-item-stats">
                    <h4>{this.props.question.votes.length}
                        <br/>Votes</h4>
                    <h4>{this.props.question.answers.length}
                        <br/>Answers</h4>
                    <h4>0
                        <br/>Views</h4>
                </div> */}
                <div className="question-item-stats">
                    <div id='votes'>
                        <h3>{this.props.question.votes.length}</h3>
                        <h4>votes</h4>
                    </div>

                    <div id='answers'>
                        <h3>{this.props.question.answers.length}</h3>
                        <h4>answers</h4>
                    </div>

                    <div id='views'>
                        <h3>0</h3>
                        <h4>views</h4>
                    </div>
                </div>
                <Link to={`/questions/${this.props.question.id}`}>
                    <li className="question-item">{this.props.question.title}</li>
                </Link>
            </section>
        )
    }
}

export default QuestionIndexItem;