class AddUserIdToHappenings < ActiveRecord::Migration
  def change
    add_column :happenings, :user_id, :integer
  end
end
