class HomeController < ApplicationController
  def profile
    render json: current_user
  end
end
