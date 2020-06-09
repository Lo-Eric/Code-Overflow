class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :asker_id, null: false
      t.integer :views, null: false
      t.string :title, null: false
      t.string :body, null: false

      t.timestamps
    end

  end
end
