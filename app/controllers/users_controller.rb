class UsersController < ApplicationController

  include SessionsHelper

  def create
    user = User.create(user_params)
    redirect_to '/'
  end

  def new
    @user = User.new
  end

  def profile
    authenticate!
    @user = current_user
  end

  def login
    redirect_to '/'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
