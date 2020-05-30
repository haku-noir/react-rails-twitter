class User < ApplicationRecord
  validates :name, {presence: true}
  validates :email, {presence: true, uniqueness: true}

  def like_posts
    likes = Like.where(user_id: self.id).order(created_at: :desc)
    like_posts = []

    likes.each do |like|
      like_posts << like.post_id
    end
    return like_posts
  end

  def follower_ids
    follows = Follow.where(following_user_id: self.id).order(created_at: :desc)
    follower_ids = []

    follows.each do |follow|
      follower_ids << follow.follower_id
    end
    return follower_ids
  end

  def following_user_ids
    follows = Follow.where(follower_id: self.id).order(created_at: :desc)
    following_user_ids = []

    follows.each do |follow|
      following_user_ids << follow.following_user_id
    end
    return following_user_ids
  end

end
