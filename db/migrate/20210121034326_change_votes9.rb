class ChangeVotes9 < ActiveRecord::Migration[5.2]
  def change
    add_column :votes, :score, :integer, null:false
  end
end
