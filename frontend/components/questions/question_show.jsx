import React from 'react';
import LeftNavBar from '../left_nav_bar/left_nav';
import CreateAnswerContainer from '../answers/create_answer_container'
import AnswerItemContainer from '../answers/answer_item_container'

class QuestionShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.deleteQuestion = this.deleteQuestion.bind(this);
    };

    componentDidMount(){
        this.props.fetchQuestion(this.props.match.params.questionId);
    }

    deleteQuestion() {
        this.props
        .deleteQuestion(this.props.question.id)
        .then(()=> this.props.history.push('/home'))
    }

    render () {
        if (!this.props.question) {
            return null
        }; 
        
        return (
          <div className="question-show-page">
            <section className="left-nav-bar">
              <LeftNavBar />
            </section>

{/* 
            <section className="question-voting">
              <button className={`up-arrow ${this.props.question.currentUserVote === 'up_vote' ? 'current-user-vote' : ''}`} onClick={this.handleVote("up_vote")}>
                <svg className="svg-icon" aria-hidden="true" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10z"></path></svg>
              </button>

              <div className="question-score">{this.props.question.score}</div>
              <button className={`down-arrow ${this.props.question.currentUserVote === 'down_vote' ? 'current-user-vote' : ''}`} onClick={this.handleVote("down_vote")} >
                <svg className="svg-icon" aria-hidden="true" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26z"></path></svg>
              </button>
            </section> */}

            <section className="question-show-content">
              <h2 className="question-title">{this.props.question.title}</h2>
              <div className="divider">.</div>
              <p className="question-body">{this.props.question.body}</p>
              <div className='btns'>
                <button id="edit-btn">Edit</button>
                <button id="delete-btn" onClick={this.deleteQuestion}>
                  Delete
                </button>
              </div>

              {this.props.question.answers ? (
                <ul>
                  <h3>{this.props.question.answers.length} Answers</h3>
                  {this.props.question.answers.map((answer, idx) => (
                    <AnswerItemContainer
                      key={idx}
                      answer={answer}
                      questionId={this.props.question.id}
                    />
                  ))}
                </ul>
              ) : (
                <p>This question has not been answered yet.</p>
              )}

              <CreateAnswerContainer question={this.props.question} />
            </section>

            <section className="right-nav-bar">
              <div className="right-nav-header">Watched Tags</div>
            </section>
          </div>
        );
    }
}

export default QuestionShowForm;