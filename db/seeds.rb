# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# demo_user = User.create!(username: "DemoUser", email: "DemoEmail@Gmail.com", password: "Demopw")
user1 = User.create!(username: "User1", email: "User1@Gmail.com", password: "User1pw")
user2 = User.create!(username: "User2", email: "User2@Gmail.com", password: "User2pw")
user3 = User.create!(username: "User3", email: "User3@Gmail.com", password: "User3pw")

question1 = Question.create!(asker_id: 1, views: 0, title: "Question about Javascript", body: "What is javascrip?")
question2 = Question.create!(asker_id: 2, views: 0, title: "Question about Ruby", body: "What is ruby?")
question3 = Question.create!(asker_id: 3, views: 0, title: "Question about Rails", body: "What is rails?")