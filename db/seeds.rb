normal = User.create(email: 'user@sample.com', password: 'password')
superadmin = User.create(email: 'super@sample.com', password: 'password')

superadmin.add_role(User::ROLE_SUPERADMIN)
