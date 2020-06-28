class Api::QuestionsController < ApplicationController
    def index 
        @questions = Question.all
        render 'api/questions/index'
    end

     def show
        @question = Question.find(params[:id])
        render '/api/questions/show'
    end

    def create
        @question = Question.new(question_params)
        @question.asker_id = current_user.id
        
        if @question.save
            render '/api/questions/show'
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

     private

    def question_params
        params.require(:question).permit(:title, :body, :views)
    end
end