class User < ApplicationRecord
  validates :name, {presence: true}

  def like_posts
    likes = Like.where(user_id: self.id).order(created_at: :desc)
    like_posts = []

    likes.each do |like|
      like_posts << like.post_id
    end
    return like_posts
  end

end
