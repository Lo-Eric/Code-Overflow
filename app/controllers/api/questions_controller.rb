class Api::QuestionsController < ApplicationController
    def index 
        @questions = Question.all
        render 'api/questions/index'
    end

    def create
    end
end