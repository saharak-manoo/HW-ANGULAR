Rails.application.routes.draw do
  devise_for :users

  authenticated :user do
    root to: 'home#index'
  end

  root to: redirect('/users/sign_in')
end
