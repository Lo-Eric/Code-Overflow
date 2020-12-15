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
            render '/api/questions/show', include: :answers
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def update
        @question = Question.find(params[:id])

        if @question.update(question_params)
            render '/api/questions/show', include: :answers
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def destroy
        @question = Question.find(params[:id])
        @question.destroy

        render '/api/questions/show'
    end

    def upvote 
        vote = Vote.new(user_id: params[:user_id], votable_id: params[:id], votable_type: 'Question')
        
        if vote.save
            render json: "Successfully saved"
        else
            render json: vote.errors.full_messages, status: :unprocessable_entity
        end
    end

    def downvote
        vote = Vote.new(user_id: params[:user_id], votable_id: params[:id], votable_type: 'Question')
  
        if vote.destroy
            render json: "Successfully saved"
        else
            render json: vote.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def question_params
        params.require(:question).permit(:title, :body, :views)
    end
end