class Api::HappeningsController < ApplicationController

  include Api::HappeningsHelper
  before_action :current_api_user!, except: [:show, :showall]

  def index
    render json: @current_user.happenings.all
  end

  def showall
    render json: Happening.all
  end

  def create
    happen = @current_user.happenings.create(happening_params)
    render json: happen
  end

  def show
    render json: Happening.find(params[:id])
  end

  def update
    happen = @current_user.happenings.find(params[:id])
    happen.update(happen_params)
    render json: happen
  end

  def destroy
    @current_user.happenings.destroy(params[:id])
    render json: {status: 202, message: 'Happening destroyed'}
  end

  private

  def happening_params
    params.require(:happenings).permit(:name, :description, :address, :city, :state, :latitude, :longitude, :event_type)
  end

end
