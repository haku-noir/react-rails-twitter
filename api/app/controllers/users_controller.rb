class UsersController < ApplicationController
  before_action :authenticate_user, {only: [:index, :show, :update, :logout]}
  before_action :forbid_login_user, {only: [:create, :login]}
  before_action :set_user, only: [:show, :destroy, :update]

  def index
    @users = User.select(:id, :name, :image_name, :created_at, :updated_at).order(updated_at: :desc)
    render json: { users: @users }
  end

  def create
    @user = User.new(
      name: params[:name],
      password: params[:password],
      image_name: "default_user.jpg",
    )
    if @user.save
      session[:user_id] = @user.id
      render json: { user: @user }
    else
      render json: {}
    end
  end

  def login
    @user = User.find_by(name: params[:name], password: params[:password])

    if @user
      session[:user_id] = @user.id
      render json: { user: @user }
    else
      render json: {}
    end
  end

  def logout
    session[:user_id] = nil
  end

  def set_user
    @user = User.find(params[:id])
  end

  def show
    render json: { user: @user }
  end

  def update
    if params[:name]
      @user.name = params[:name]
    end
    if params[:password]
      @user.password = params[:password]
    end

    if params[:image]
      @user.image_name = "#{@user.id}.jpg"
      image = params[:image]
      File.binwrite("public/user_images/#{@user.image_name}", image.read)
    end

    if @user.save
      render json: { user: @user }
    else
      render json: {}
    end
  end

end
