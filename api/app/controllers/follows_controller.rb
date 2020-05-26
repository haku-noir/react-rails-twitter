class FollowsController < ApplicationController
  before_action :authenticate_user

  def follow
    @follow = Follow.new(follower_id: @current_user.id, following_user_id: params[:following_user_id])
    @follow.save
    render json: { follow: @follow }
  end

  def unfollow
    @follow = Follow.find_by(follower_id: @current_user.id, following_user_id: params[:following_user_id])
    @follow.destroy
    render json: {}
  end

end
