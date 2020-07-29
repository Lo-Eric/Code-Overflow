class Api::AnswersController < ApplicationController
  def index
    @answers = Answer.all
    render '/api/answers/index'
  end

  def show
    @answer = Answer.find(params[:id])
    render '/api/answers/show', include: :owner
  end

  def create
    debugger
    @answer = Answer.create(answer_params)
    @answer.answerer_id = current_user.id
    @answer.question_id = params[:id]

    if @answer.save
      render 'api/answers/show'
    else
      render json: @answer.errors.full_messages, status:422
    end
  end

  private
  def answer_params
    params.require(:answer).permit(:body)
  end
end