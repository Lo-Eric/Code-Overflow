Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :show, :create, :update, :destroy] do 
      # member do
      #   post :upvote, to: 'questions#upvote', as: 'upvote'
      #   post :downvote, to: 'questions#downvote', as: 'downvote'
      # end
      member do
        post 'upvote'
        post 'downvote' 
      end

      resources :answers, only: [:index, :create]
    end

    resources :answers, only: [:show, :update, :destroy]
      # member do
      #   post :upvote, to: 'answers#upvote', as: 'upvote'
      #   post :downvote, to: 'answers#downvote', as: 'downvote'
      # end
      #  member do
      #   post 'upvote'
      #   post 'downvote'
      # end

    resources :votes, only: [:create]
  end

end
