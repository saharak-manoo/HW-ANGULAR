class MyHomeworksController < ApplicationController
    load_and_authorize_resource
    skip_before_action :verify_authenticity_token
  
   
    def update
        MyHomework.find(params[:id]).update(
            name: params[:name],
            sex: params[:sex],
            age: params[:age],
            address: params[:address],
            skill: params[:skill],
            likecode: params[:likecode]
            dead: params[:dead]
      )
      render json: MyHomework.all
    end

    def create
        MyHomework.create(create_params)
      render json: MyHomework.all
    end
  
    #GET /my_homes
    def index
      my_homes = MyHomework.all
      render json: my_homes
    end
  
    private
  
    def create_params
      params.require(:my_home).permit(:name, :email,:sex,:age,:address,:skill,:likecode,:dead)
    end
  end
  