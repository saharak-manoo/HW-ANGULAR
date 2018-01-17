require 'rails_helper'

describe 'authentication', js: true do
  let(:normal_user) { create_normal_user }
  let(:super_admin) { create_super_admin }

  before do
    sign_in normal_user
  end

  it 'can login' do
    expect(page).to have_content 'Home'
  end

  it 'can logout' do
    sign_out
    expect(page).to have_button 'Log in'
  end

  if Figaro.env.rails_admin_path?
    describe 'rails admin' do
      it 'accessible by super admin only' do
        visit rails_admin_path
        sleep 1

        expect(page).to have_content 'Home'
        sign_out

        sign_in super_admin
        visit rails_admin_path
        sleep 1

        expect(page).to have_content 'Site Administration'
      end
    end
  end
end
