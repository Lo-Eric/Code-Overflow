import React from 'react';

class QuestionIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        debugger
        return (
            
            // <Link to={`/questions/${this.props.question.id}`}>
                <li className="question">{this.props.question.title}</li>
            // </Link>
        )
    }
}

export default QuestionIndexItem;