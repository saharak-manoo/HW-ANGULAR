class User < ApplicationRecord
  rolify
  acts_as_paranoid
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  after_create :assign_default_role

  ROLE_NORMAL = :normal
  ROLE_SUPER_ADMIN = :superadmin

  def assign_default_role
    self.add_role(ROLE_NORMAL) if self.roles.blank?
  end

  def as_json(options={})
    super.tap do |hash|
      hash[:role] = roles.last&.name
    end
  end
end
