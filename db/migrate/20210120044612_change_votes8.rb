class ChangeVotes8 < ActiveRecord::Migration[5.2]
  def change
    remove_column :votes, :score
  end
end
