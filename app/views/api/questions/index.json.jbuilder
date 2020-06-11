@questions.each do |question|
    # debugger
    json.set! question.id do
        json.extract! question, :id, :title, :body, :asker_id
    end
end
