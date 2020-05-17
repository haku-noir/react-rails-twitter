class PostsController < ApplicationController
  before_action :set_post, only: [:show, :destroy, :update]
  before_action :set_post_hash, only: [:show, :destroy, :update]

  def index
    @posts = Post.order(updated_at: :desc)
    @posts_array = []

    @posts.each do |post|
      post_hash = post.attributes
      post_hash.store(:user, post.user)
      post_hash.store(:time, post.time)
      @posts_array << post_hash
    end
    render json: { posts: @posts_array }
  end

  def create
    @post = Post.new(
      content: params[:content],
      user_id: @current_user.id
    )

    if @post.save
      set_post_hash
      render json: { post: @post_hash }
    else
      render json: {}
    end
  end

  def set_post
    @post = Post.find(params[:id])
  end

  def set_post_hash
    @post_hash = @post.attributes
    @post_hash.store(:user, @post.user)
    @post_hash.store(:time, @post.time)
  end

  def show
    render json: { post: @post_hash }
  end

  def destroy
    @post.destroy
    render json: {}
  end

  def update
    if @post.update(content: params[:content])
      render json: { post: @post_hash }
    else
      render json: {}
    end
  end

end
