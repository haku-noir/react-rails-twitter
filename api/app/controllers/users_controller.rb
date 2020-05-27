class UsersController < ApplicationController
  before_action :authenticate_user, {only: [:update, :logout]}
  before_action :forbid_login_user, {only: [:create, :login]}
  before_action :set_user, only: [:show, :destroy, :update]
  before_action :set_user_hash, only: [:show]
  before_action :ensure_correct_user, {only: [:update]}

  def index
    @users = User.select(:id, :name, :image_name, :profile, :created_at, :updated_at).order(created_at: :desc)
    render json: { users: @users }
  end

  def create
    @user = User.new(
      name: params[:name],
      password: params[:password],
      image_name: "default_user.jpg",
      profile: ''
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

  def session_user
    if @current_user
      @current_user_hash = @current_user.attributes
      @current_user_hash.store(:likes, @current_user.like_posts)
      @current_user_hash.store(:followers, @current_user.follower_ids)
      @current_user_hash.store(:following_users, @current_user.following_user_ids)
      render json: { user: @current_user_hash }
    else
      render json: {}
    end
  end

  def set_user
    @user = User.select(:id, :name, :image_name, :profile, :created_at, :updated_at).find_by(id: params[:id])
  end

  def set_user_hash
    @user_hash = @user.attributes
    @user_hash.store(:likes, @user.like_posts)
    @user_hash.store(:followers, @user.follower_ids)
    @user_hash.store(:following_users, @user.following_user_ids)
  end

  def show
    render json: { user: @user_hash }
  end

  def ensure_correct_user
    if @current_user.id != params[:id].to_i
      render json: {}
    end
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
