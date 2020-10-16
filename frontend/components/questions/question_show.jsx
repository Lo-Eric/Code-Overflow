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