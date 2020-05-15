class UsersController < ApplicationController
  before_action :set_user, only: [:show, :destroy, :update]

  def index
    users = User.order(updated_at: :desc)
    render json: { data: users }
  end

  def create
    user = User.new(name: params[:name], password: params[:password])
    if user.save
      session[:userId] = user.id
      render json: { data: user }
    else
      render json: {}
    end
  end

  def login
    user = User.find_by(name: params[:name], password: params[:password])

    if user
      session[:userId] = user.id
      render json: { data: user }
    else
      render json: {}
    end
  end

  def set_user
    user = User.find(params[:id])
  end

  def show
    render json: { data: user }
  end

  def destroy
    user.destroy
    render json: { data: user }
  end

  def update
    if user.update(name: params[:name], password: params[:password])
      render json: { data: user }
    else
      render json: {}
    end
  end

end
