Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :show, :create, :update, :destroy] do 
      member do
        post :upvote, to: 'questions#upvote', as: 'upvote'
        post :downvote, to: 'questions#downvote', as: 'downvote'
      end

      resources :answers, only: [:index, :show, :create]
    end

    post 'vote', to: "votes#vote"
  end

end
