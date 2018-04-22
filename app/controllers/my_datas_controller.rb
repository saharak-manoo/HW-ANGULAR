class MyDatasController < ApplicationController
  load_and_authorize_resource
  skip_before_action :verify_authenticity_token

  # PATCH /my_datas/:id
  def update
    MyData.find(params[:id]).update(
      string_test: params[:string_test],
      integer_test: params[:integer_test],
      boolean_test: params[:boolean_test]
    )
    render json: MyData.all
  end

  # POST /my_datas
  def create
    MyData.create(create_params)
    render json: MyData.all
  end

  #GET /my_datas
  def index
    my_datas = MyData.all
    render json: my_datas
  end

  private

  def create_params
    params.require(:my_data).permit(:string_test, :email, :integer_test, :boolean_test)
  end
end
