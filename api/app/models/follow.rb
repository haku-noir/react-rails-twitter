class Follow < ApplicationRecord
  validates :following_user_id, {presence: true}
  validates :follower_id, {presence: true}
end
