class Post < ApplicationRecord
  validates :content, {presence: true, length: {maximum: 140}}
  validates :user_id, {presence: true}

  def user
    return User.select(:id, :name, :image_name, :created_at, :updated_at).find_by(id: self.user_id)
  end

  def time
    return self.updated_at.strftime("%Y/%m/%d %H:%M")
  end

  def likes_count
    return Like.where(post_id: self.id).count
  end

end
