require 'rails_helper'

describe 'authentication', js: true do
  let(:user) { User.make! }

  before do
    sign_in user
  end

  it 'can login' do
    expect(page).to have_content 'Home'
  end

  it 'can logout' do
    sign_out
    expect(page).to have_button 'Log in'
  end
end
