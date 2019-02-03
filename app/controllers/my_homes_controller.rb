class MyHomesController < ApplicationController
  load_and_authorize_resource
  skip_before_action :verify_authenticity_token

  #GET /my_homes
  def index
    my_homes = MyHome.order(id: :desc)
    render json: my_homes
  end

  def show
    my_home = MyHome.find(params[:id])
    render json: my_home
  end

  def create
    MyHome.create(my_home_params)
    redirect_to my_homes_path
  end

  def update
    my_home = MyHome.find(params[:id])
    my_home.update(my_home_params)
    render json: my_home
  end

  def destroy
    MyHome.find(params[:id]).destroy
    redirect_to my_homes_path
  end

  private

  def my_home_params
    params.require(:my_home).permit(:name, :sex, :age, :address, :skill, :likecode, :dead)
  end
end
