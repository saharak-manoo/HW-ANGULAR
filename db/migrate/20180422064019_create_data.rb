class CreateData < ActiveRecord::Migration[5.1]
  def change
    create_table :my_datas do |t|
      t.string :string_test
      t.integer  :integer_test
      t.boolean :boolean_test
    end
  end
end
