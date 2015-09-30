class HappeningsController < ApplicationController

  include SessionsHelper

  # GET    /happenings(.:format)          happenings#index
  def index
    @happenings = Happening.all
    @user = User.new
  end

  # POST   /happenings(.:format)          happenings#create
  def create
    happening = Happening.create(happening_params)
    redirect_to home_path
  end

  # GET    /happenings/new(.:format)      happenings#new
  def new
    @happening = Happening.new()
  end

  # GET    /happenings/:id/edit(.:format) happenings#edit
  def edit
    @happening = Happening.find(params[:id])
  end

  # GET    /happenings/:id(.:format)      happenings#show
  def show
    @happening = Happening.find(params[:id])
  end

  # PATCH  /happenings/:id(.:format)      happenings#update
  # PUT    /happenings/:id(.:format)      happenings#update
  def update
    happening = Happening.find(params[:id])
    happening.update(happening_params)
    redirect_to happening_path(happening)
  end

  # DELETE /happenings/:id(.:format)      happenings#destroy
  def destroy
    Happening.destroy(params[:id])
    redirect_to happenings_path
  end


  private

  def happening_params
    params.require(:happening).permit(:name, :description)
  end

end
