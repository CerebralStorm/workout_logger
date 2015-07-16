Rails.application.routes.draw do
  root "pages#index"

  resources :comments
  resources :exercises
end
