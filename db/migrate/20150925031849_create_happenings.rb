class CreateHappenings < ActiveRecord::Migration
  def change
    create_table :happenings do |t|
      t.string :name
      t.string :description
      t.string :address
      t.string :city
      t.string :state
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps null: false
    end
  end
end
