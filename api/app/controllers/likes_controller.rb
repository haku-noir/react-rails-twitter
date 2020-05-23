class LikesController < ApplicationController
  before_action :authenticate_user

  def like
    @like = Like.new(user_id: params[:user_id], post_id: params[:post_id])
    @like.save
    render json: { like: @like }
  end

  def dislike
    @like = Like.find_by(user_id: params[:user_id], post_id: params[:post_id])
    @like.destroy
    render json: {}
  end

end
