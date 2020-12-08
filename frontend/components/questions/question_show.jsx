import React from 'react';
import LeftNavBar from '../left_nav_bar/left_nav';
import CreateAnswerContainer from '../answers/create_answer_container'
import AnswerItemContainer from '../answers/answer_item_container'
import { Link } from 'react-router-dom';

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

  editQuestion() {

  }

  handleVote() {

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
       
        <section className="question-show-content">
          <h2 className="question-title">{this.props.question.title}</h2>
          <div className="divider">.</div>

          <div className="question-body">
            <div id="vote-btns">
              <button>
                <svg aria-hidden="true" className="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36">
                  <path d="M2 26h32L18 10z"></path>
                </svg>
              </button>

              {/* <div className="question-score">{this.props.question.score}</div> */}
              <button>
                <svg className="svg-icon m0 iconArrowDownLg" aria-hidden="true" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26z"></path></svg>
              </button>
            </div>
            {this.props.question.body}
          </div>

          <div className='btns'>
            <Link
              id="button1"
              to={`/questions/${this.props.question.id}/edit`}
            >
              Edit
            </Link>

            <button id="delete-btn" onClick={this.deleteQuestion}>Delete</button>
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