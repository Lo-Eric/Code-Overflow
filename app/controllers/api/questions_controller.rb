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
    end
end