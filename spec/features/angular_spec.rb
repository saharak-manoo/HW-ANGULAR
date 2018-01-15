require 'rails_helper'

describe 'angular', js: true do
  let(:normal_user) { create_normal_user }
  let(:super_admin) { create_super_admin }

  before do
    sign_in normal_user
  end

  it 'works!' do
    expect(page).to have_content 'Hello Angular!'
  end
end
