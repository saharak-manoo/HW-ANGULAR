class Ability
  include CanCan::Ability

  def initialize(user)
    return unless user

    can :read, User

    if user.has_role? User::ROLE_SUPER_ADMIN
      can :manage, :all
    end
  end
end
