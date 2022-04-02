Rails.application.routes.draw do
  namespace :admin do
    get 'vendors/index'
  end
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root 'products#index'

  resources :products, only: [:index, :show]

  namespace :admin do
    root 'products#index' # /admin
    resources :products
    resources :vendors, except: [:show]
  end




end
