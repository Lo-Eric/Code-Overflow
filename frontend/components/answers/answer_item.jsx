import React from 'react';

const AnswersShowForm = (props) => (
    <li id='answer-content'>
        {props.answer.body}
    </li>
)

export default AnswersShowForm;