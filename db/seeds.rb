# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

User.create!(name: "andrea", email: "andrea@example.com", password: "password")
Event.create!(name: "game", description: "123", address: "123 main st ")
Event.create!(name: "game1", description: "123", address: "123 main st ")
Event.create!(name: "game2", description: "123", address: "123 main st ")
Favorite.create!(event_id: 1, user_id: 1)
Favorite.create!(event_id: 3, user_id: 1)
