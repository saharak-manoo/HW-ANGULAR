Rails.application.routes.draw do
  if Figaro.env.rails_admin_path?
    mount RailsAdmin::Engine => "/#{Figaro.env.rails_admin_path}", as: 'rails_admin'
  end
  devise_for :users

  authenticated :user do
    root to: 'home#index'
  end

  resources :users, only: [:index, :show]
  resources :my_datas, only: [:index, :update, :create]
  resources :my_data_home_works

  root to: redirect('/users/sign_in')
end
