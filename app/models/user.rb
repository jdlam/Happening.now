class User < ActiveRecord::Base

  has_secure_password

  has_many :happenings

  before_create :generate_token

  def generate_token
    self.token = SecureRandom.urlsafe_base64(nil, false)
  end

end
