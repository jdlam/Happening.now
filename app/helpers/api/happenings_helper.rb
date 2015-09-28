module Api::HappeningsHelper
  def current_api_user!
    if token = params[:token] || env['HTTP_TOKEN']
      @current_user = User.find_by(token: token)
    else
      render json: {status => 401}
    end
  end
end
