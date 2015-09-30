class AddTypeToToHappenings < ActiveRecord::Migration
  def change
    add_column :happenings, :type, :string
  end
end
