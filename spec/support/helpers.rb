module AsyncHelper
  def eventually(options = {})
    timeout = options[:timeout] || 2
    interval = options[:interval] || 0.1
    time_limit = Time.now + timeout
    loop do
      begin
        yield
      rescue => error
      end
      return if error.nil?
      raise error if Time.now >= time_limit
      sleep interval
    end
  end
end

module FeatureHelper
  # save screenshot
  def ss(mac_user, message = nil)
    file_name = ('a'..'z').to_a.shuffle[0,8].join
    file_path = "/Users/#{mac_user}/Desktop/capybara/#{file_name}.jpg"
    puts message if message
    puts "saved screenshot to #{file_path}"
    save_screenshot(file_path)
  end

  def sign_in(user)
    visit '/'
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'
    sleep 1
  end

  def sign_out
    click_link 'Log out'
  end
end

module RoleHelper
  def create_super_admin(options = {})
    user = FactoryBot.create :user, options
    user.add_role(User::ROLE_SUPER_ADMIN)
    user
  end

  def create_normal_user(options = {})
    user = FactoryBot.create :user, options
    user.add_role(User::ROLE_NORMAL)
    user
  end
end

RSpec.configure do |config|
  config.include AsyncHelper, type: :feature
  config.include FeatureHelper, type: :feature
  config.include RoleHelper
end
