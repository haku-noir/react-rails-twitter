class PostsController < ApplicationController
  def index
    posts = Post.order(created_at: :desc)
    render json: { data: posts }
  end

  def post_params
    params.require(:post).permit(:content)
  end

  def create
    post = Post.new(content: params[:content])
    if post.save
      render json: { data: post }
    else
      render json: { data: post.errors }
    end
  end
end
