class Answer < ApplicationRecord
    validates :body, :question_id, :answerer_id, presence:true

    belongs_to :answerer,
    foreign_key: :answerer_id,
    class_name: 'User'

    belongs_to :question,
    foreign_key: :question_id,
    class_name: 'Question'
end