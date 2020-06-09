class ChangeQuestions < ActiveRecord::Migration[5.2]
  def change
    add_index :questions, :asker_id
  end
end
