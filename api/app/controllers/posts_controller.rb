class PostsController < ApplicationController
  before_action :set_post, only: [:show, :destroy, :update]

  def index
    posts = Post.order(created_at: :desc)
    render json: { data: posts }
  end

  def create
    post = Post.new(content: params[:content])
    if post.save
      render json: { data: post }
    else
      render json: { data: post.errors }
    end
  end

  def set_post
    @post = Post.find(params[:id])
  end

  def show
    render json: { data: @post }
  end

  def destroy
    @post.destroy
    render json: { data: @post }
  end

  def update
    if @post.update(content: params[:content])
      render json: { data: @post }
    else
      render json: { data: @post.errors }
    end
  end

  private
end
