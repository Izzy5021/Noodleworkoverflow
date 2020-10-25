class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.string :answer_body, null: false 
      t.integer :question_id, null: false 
      t.integer :answer_author_id, null: false  
      t.timestamps
    end
    add_index :answers, :question_id
    add_index :answers, :answer_author_id 
  end
end
