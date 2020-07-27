import React from 'react';
import LeftNavBar from '../left_nav_bar/left_nav';

class CreateAnswerForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
    }
}

export default CreateAnswerForm;