class ApplicationController < ActionController::API
  before_action :set_current_user

  def set_current_user
    @current_user = User.select(:id, :name, :image_name, :created_at, :updated_at).find_by(id: session[:user_id])
  end

  def authenticate_user
    if @current_user == nil
      render json: {}
    end
  end

  def forbid_login_user
    if @current_user
      render json: {}
    end
  end

end
