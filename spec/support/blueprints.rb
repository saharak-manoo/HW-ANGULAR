require 'machinist/active_record'

User.blueprint do
  email { Faker::Internet.email }
  password  { 'password' }
end

Role.blueprint do
  # Attributes here
end
