class ChangeVotes7 < ActiveRecord::Migration[5.2]
  def change
    remove_column :votes, :user_id
  end
end
