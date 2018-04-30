class MyHomesController < ApplicationController
    load_and_authorize_resource
    skip_before_action :verify_authenticity_token
  
   
    def update
        MyHome.find(params[:id]).update(
            name: params[:name],
            sex: params[:sex],
            age: params[:age],
            address: params[:address],
            skill: params[:skill],
            likecode: params[:likecode]
            dead: params[:dead]
      )
      render json: MyHome.all
    end

    def create
        MyHome.create(create_params)
      render json: MyHome.all
    end
  
    #GET /my_homes
    def index
      my_homes = MyHome.all
      render json: my_homes
    end
  
    private
  
    def create_params
      params.require(:my_home).permit(:name, :email,:sex,:age,:address,:skill,:likecode,:dead)
    end
  end
  