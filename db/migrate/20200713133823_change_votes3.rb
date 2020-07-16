class ChangeVotes3 < ActiveRecord::Migration[5.2]
  def change
    add_column :votes, :user_id, :string
  end
end
