import React from 'react';
import LeftNavBar from '../left_nav_bar/left_nav';
import CreateAnswerContainer from '../answers/create_answer_container'
import AnswerItemContainer from '../answers/answer_item_container'
import { Link } from 'react-router-dom';

class QuestionShowForm extends React.Component {
  constructor(props) {
    super(props);
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.handleVote = this.handleVote.bind(this);
  };

  componentDidMount(){
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  deleteQuestion() {
    this.props
    .deleteQuestion(this.props.question.id)
    .then(()=> this.props.history.push('/home'))
  }

  handleVote(score) {
    return (e) => {
      e.preventDefault();
      this.props
        .createVote(score, 'Question', this.props.question.id)
        // .then((question) => this.props.history.push(`/questions/${question.question.id}`))
    }
  }
  
  render () {
    if (!this.props.question) return null;

    if (this.props.currentUser && this.props.question.asker_id === this.props.currentUser.id) {
      var editButtons =  
        <div className='btns'>
          <Link id="edit-btn" to={`/questions/${this.props.question.id}/edit`}>Edit</Link>
          <button id="delete-btn" onClick={this.deleteQuestion}>Delete</button>
        </div>
    }
      
    return (
      <div className="question-show-page">
        <section className="left-nav-bar">
          <LeftNavBar />
        </section>
       
        <section className="question-show-content">
          <h2 className="question-title">{this.props.question.title}</h2>
          <div className="divider">.</div>

          <div className="question-body">
            <div className="vote-btns">
              <button id='upvote-btn' onClick={this.handleVote(-1)}>
                <svg aria-hidden="true" className="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36">
                  <path d="M2 26h32L18 10z"></path>
                </svg>
              </button>

              {/* <div className="question-score">{this.props.question.score}</div> */}
              <button id='downvote-btn'>
                <svg className="svg-icon m0 iconArrowDownLg" aria-hidden="true" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26z"></path></svg>
              </button>
            </div>
            {this.props.question.body}
          </div>

          {editButtons}
          
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
          ) : null}

          <CreateAnswerContainer question={this.props.question} />
        </section>

        <section className="right-nav-bar">
          <div className="right-nav-header">Watched Tags</div>
          <div className="watched-tags-content">
            <svg aria-hidden="true" id="watched-tags" width="48" height="48" viewBox="0 0 48 48"><path opacity=".2" d="M29.22 38.1a3.4 3.4 0 014.81-4.82l8.81 8.81a3.4 3.4 0 01-4.81 4.81l-8.81-8.8z"></path><path d="M18.5 5a1 1 0 100 2c.63 0 1.24.05 1.84.15a1 1 0 00.32-1.98A13.6 13.6 0 0018.5 5zm7.02 1.97a1 1 0 10-1.04 1.7 11.5 11.5 0 015.44 8.45 1 1 0 001.98-.24 13.5 13.5 0 00-6.38-9.91zM18.5 0a18.5 18.5 0 1010.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1044.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0018.5 0zM2 18.5a16.5 16.5 0 1133 0 16.5 16.5 0 01-33 0zm29.58 15.2a1.5 1.5 0 112.12-2.12l9.83 9.83a1.5 1.5 0 11-2.12 2.12l-9.83-9.83z"></path></svg>
            <p>Watch tags to curate your list of questions.</p>
          </div>
        </section>
        
      </div>
    );
  }
}

export default QuestionShowForm;