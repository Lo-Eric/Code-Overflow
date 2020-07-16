class Question < ApplicationRecord
    validates :title, :body, presence: true 

    belongs_to :user,
    foreign_key: :asker_id,
    class_name: 'User'

    has_many :votes, 
    as: :votable
end