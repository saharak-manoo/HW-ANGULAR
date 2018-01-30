require 'rails_helper'

describe 'first screen', js: true do
  let(:normal_user) { create_normal_user(email: 'normal@user.com') }
  let(:super_admin) { create_super_admin(email: 'super@user.com') }

  before do
    super_admin
    normal_user

    sign_in normal_user
  end

  it 'show users list' do
    expect(page).to have_content /super@user\.com.*superadmin.*normal@user\.com.*normal/
  end
end
