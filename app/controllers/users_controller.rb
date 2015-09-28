class UsersController < ApplicationController

  include SessionsHelper

  def create
    user = User.create(user_params)
    redirect_to login_path
  end

  def new
    @user = User.new
  end

  def profile
    authenticate!
    @user = current_user
  end

  def login

  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
