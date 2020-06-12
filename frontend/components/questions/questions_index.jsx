import React from 'react';
import { Link } from 'react-router-dom';
import QuestionIndexItem from './question_index_item';
import LeftNavBar from '../left_nav_bar/left_nav'

class QuestionsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchQuestions();
    }

    render(){
        return (
            <div className='home-contents'>
                <section className="left-nav-bar"><LeftNavBar /></section>

                <section className="questions-header">
                        <div className="top-section">
                            <h2>Top Questions</h2>
                            <Link to='/question/new' id="ask-question-button">Ask Question</Link>
                        </div>

                        <div className="divider">.</div>

                        <div className="questions-index">
                            <ul>
                                {this.props.questions.map((question, idx) => (
                                    <QuestionIndexItem key={idx} question={question} />
                                ))}
                            </ul>
                        </div>    
                </section>

                <section className="right-nav-bar">Watched Tags</section>
            
            </div>
        )
    }
}

export default QuestionsIndex;
