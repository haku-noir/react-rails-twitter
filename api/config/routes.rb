Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :posts
  resources :users
  post "login" => "users#login"
  post "logout" => "users#logout"
  get "session" => "users#session_user"
  post "like" => "likes#like"
  post "dislike" => "likes#dislike"
end
