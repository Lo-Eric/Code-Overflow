class Api::VotesController < ApplicationController
  def create
    @new_vote = Vote.new(vote_params)
    @new_vote.voter_id = current_user.id

    old_vote = Vote.find_by(voter_id: current_user.id, votable_type: params[:votable_type], votable_id: params[:votable_id]);

    if old_vote.nil? 
      @new_vote.save!
      render :show
      # @question = Question.find(params[:votable_id])
      # render '/api/questions/show'
    elsif old_vote.score != @new_vote.score
      old_vote.destory
      @new_vote.save! 
      render :show
      # @question = Question.find(params[:votable_id])
      # render '/api/questions/show'
    else
      render json: @new_vote.errors.full_messages, status: 422
    end
  end

  private 

  def vote_params
    params.permit(:score, :votable_type, :votable_id)
  end
end

