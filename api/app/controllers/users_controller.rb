class UsersController < ApplicationController
  before_action :set_user, only: [:show, :destroy, :update]

  def index
    users = User.order(updated_at: :desc)
    render json: { data: users }
  end

  def create
    user = User.new(content: params[:content])
    if user.save
      render json: { data: user }
    else
      render json: { data: user.errors }
    end
  end

  def set_user
    @user = User.find(params[:id])
  end

  def show
    render json: { data: @user }
  end

  def destroy
    @user.destroy
    render json: { data: @user }
  end

  def update
    if @user.update(content: params[:content])
      render json: { data: @user }
    else
      render json: { data: @user.errors }
    end
  end

end
