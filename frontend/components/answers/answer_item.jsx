import React from 'react';

class AnswersShowForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <li id='answer-content'>
                {this.props.answer.body}
            </li>
        )
    }
}

export default AnswersShowForm;