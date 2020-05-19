class Post < ApplicationRecord

  def user
    return User.select(:id, :name, :image_name, :created_at, :updated_at).find_by(id: self.user_id)
  end

  def time
    return self.updated_at.strftime("%Y/%m/%d %H:%M")
  end

end
