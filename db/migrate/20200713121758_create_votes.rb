class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.bigint  :votable_id
      t.string  :votable_type
      t.timestamps
    end
  end
end
