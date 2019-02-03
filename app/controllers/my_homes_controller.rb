class MyHomesController < ApplicationController
  load_and_authorize_resource
  skip_before_action :verify_authenticity_token

  #GET /my_homes
  def index
    my_homes = MyHome.order(id: :desc)

    # search
    if params[:search].present?
      my_homes = my_homes.where("name LIKE :search OR sex LIKE :search OR address LIKE :search", search: "%#{params[:search]}%")
    end
    render json: my_homes
  end

  def show
    my_home = MyHome.find(params[:id])
    render json: my_home
  end

  def create
    MyHome.create(my_home_params)
    redirect_to MyHome.order(id: :desc)
  end

  def update
    my_home = MyHome.find(params[:id])
    my_home.update(my_home_params)
    redirect_to MyHome.order(id: :desc)
  end

  def destroy
    MyHome.find(params[:id]).destroy
    redirect_to MyHome.order(id: :desc)
  end

  private

  def my_home_params
    params.require(:my_home).permit(:name, :sex, :age, :address, :skill, :likecode, :dead)
  end
end
