class ChangeVotes2 < ActiveRecord::Migration[5.2]
  def change
    add_index :votes, :votable_id
    add_index :votes, :votable_type
  end
end
