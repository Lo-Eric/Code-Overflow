class Vote < ApplicationRecord
    validates :voter_id, uniqueness: { scope: [:votable_id, :votable_type] }

    belongs_to :votable, polymorphic: true
    belongs_to :voter, class_name: 'User'
end

