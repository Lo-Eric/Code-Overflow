import React from 'react';
import { Link } from 'react-router-dom';
import QuestionIndexItem from './question_index_item';
import QuestionIndexItemContainer from './question_index_item_container'
import LeftNavBar from '../left_nav_bar/left_nav'
import Footer from '../splash/footer'


class QuestionsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
      this.props.fetchQuestions();
    }
 
    render(){
        if (!this.props.questions) {
          return null
        }; 
        
        return (
          <div className="index-contents">
            <div className="home-contents">
              <section className="left-nav-bar">
                <LeftNavBar />
              </section>

              <section className="questions-header">
                <div className="top-section">
                  <h2>Top Questions</h2>
                  <Link to="/question/new" id="ask-question-button">
                    Ask Question
                  </Link>
                </div>

                <div className="divider">.</div>

                <div className="questions-index">
                  <ul>
                    {this.props.questions.map((question, idx) => (
                      <QuestionIndexItemContainer key={idx} question={question} />
                    ))}
                  </ul>
                </div>
              </section>

              <section className="right-nav-bar">
                <div className="right-nav-header">Watched Tags</div>
                <div className="watched-tags-content">
                  <svg aria-hidden="true" id="watched-tags" width="48" height="48" viewBox="0 0 48 48"><path opacity=".2" d="M29.22 38.1a3.4 3.4 0 014.81-4.82l8.81 8.81a3.4 3.4 0 01-4.81 4.81l-8.81-8.8z"></path><path d="M18.5 5a1 1 0 100 2c.63 0 1.24.05 1.84.15a1 1 0 00.32-1.98A13.6 13.6 0 0018.5 5zm7.02 1.97a1 1 0 10-1.04 1.7 11.5 11.5 0 015.44 8.45 1 1 0 001.98-.24 13.5 13.5 0 00-6.38-9.91zM18.5 0a18.5 18.5 0 1010.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1044.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0018.5 0zM2 18.5a16.5 16.5 0 1133 0 16.5 16.5 0 01-33 0zm29.58 15.2a1.5 1.5 0 112.12-2.12l9.83 9.83a1.5 1.5 0 11-2.12 2.12l-9.83-9.83z"></path></svg>
                  <p>Watch tags to curate your list of questions.</p>
                </div>
              </section>
            </div>

            <div id='index-footer'>
              <Footer />
            </div>
          </div>
        );qu
    }
}

export default QuestionsIndex;
