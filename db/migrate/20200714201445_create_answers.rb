class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.string :body, null:false
      t.integer :question_id, null:false
      t.integer :answerer_id, null:false
      t.timestamps
    end
    add_index :answers, :question_id
    add_index :answers, :answerer_id
  end
end
