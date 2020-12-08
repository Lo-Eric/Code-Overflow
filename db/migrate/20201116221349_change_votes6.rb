class ChangeVotes6 < ActiveRecord::Migration[5.2]
  def change
    add_column :votes, :voter_id, :integer, null:false
  end
end
