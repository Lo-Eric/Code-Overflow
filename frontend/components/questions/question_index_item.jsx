import React from 'react';

class QuestionIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section className="question-index-item">
             {/* <Link to={`/questions/${this.props.question.id}`}> */}
                <div className="question-item-stats">
                    <h4>Votes</h4>
                    <h4>Answers</h4>
                    <h4>Views</h4>
                </div>

                <li className="question-item">{this.props.question.title}</li>
            </section>
        )
    }
}

export default QuestionIndexItem;