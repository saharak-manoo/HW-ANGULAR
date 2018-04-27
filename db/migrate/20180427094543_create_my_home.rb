class CreateMyHome < ActiveRecord::Migration[5.1]
  def change
    create_table :my_homes do |t|
      t.string :name
      t.string  :sex
      t.integer :age
      t.string  :address
      t.string :skill
      t.string  :likecode
      t.boolean :dead

    end
  end
end
