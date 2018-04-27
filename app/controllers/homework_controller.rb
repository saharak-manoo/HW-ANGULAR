class MyHomeworkController < ApplicationController
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
  
    #GET /my_data_home_works
    def index
        my_data_home_works = MyHomework.all
      render json: my_data_home_works
    end
  
    private
  
    def create_params
      params.require(:my_data_home_work).permit(:name, :email,:sex,:age,:address,:skill,:likecode,:dead)
    end
  end
  