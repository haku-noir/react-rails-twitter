class Post < ApplicationRecord

  def user
    return User.select(:id, :name, :created_at, :updated_at).find_by(id: self.user_id)
  end

end
