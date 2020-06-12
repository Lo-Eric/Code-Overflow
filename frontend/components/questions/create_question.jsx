import React from 'react';
import { connect } from "react-redux";
import Footer from '../splash/footer'
import LeftNavBar from '../left_nav_bar/left_nav'

class CreateQuestionForm extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="create-question-form">
                <section className="left-nav-bar"><LeftNavBar/></section>

                <section className="question-content">
                    <div>Title</div>
                    <div>Body</div>
                </section>
            </div>
        )
    }
}

export default CreateQuestionForm;
