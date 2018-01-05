class Ability
  include CanCan::Ability

  def initialize(user)
    # return unless user
    if user.has_role? User::ROLE_SUPERADMIN
      can :manage, :all
    end
  end
end
