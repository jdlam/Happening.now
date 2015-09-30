class RenameTypeInHappenings < ActiveRecord::Migration
  def change
    rename_column :happenings, :type, :event_type
  end
end
