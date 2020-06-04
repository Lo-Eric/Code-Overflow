class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create]

    def create
        # debugger
        @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password],
        )
        # debugger
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["The email or password is incorrect."], status: 401
        end
    end

    def destroy
        @user = current_user
       
        if @user
            logout
            render "api/users/show"
        else
            render json: ["No current user found"], status: 404
        end
    end 
end
