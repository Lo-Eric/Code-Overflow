import React from 'react';
import { Link } from "react-router-dom";

function QuestionIndexItem(props) {
    if (!props.question.votes) {
          return null
        }; 
        
        let allVotes = props.question.votes; 
        let totalVote = 0;
        allVotes.forEach(vote => {
            totalVote += vote.score
        }) 

    return (
            <section className="question-index-item">
             
                <div className="question-item-stats">
                    <div id='votes'>
                        <h3>{totalVote}</h3>
                        <h4>votes</h4>
                    </div>

                    <div id='answers'>
                        <h3>{props.question.answers.length}</h3>
                        <h4>answers</h4>
                    </div>

                    <div id='views'>
                        <h3>0</h3>
                        <h4>views</h4>
                    </div>
                </div>
                <Link to={`/questions/${props.question.id}`}>
                    <li className="question-item">{props.question.title}</li>
                </Link>
            </section>
        )
}

export default QuestionIndexItem;