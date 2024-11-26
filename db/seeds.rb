# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


Monument.create(name: "Eiffel tower", address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris", opening_date: "1889/03/31")
Monument.create(name: "Statue of Liberty", address: "New York, État de New York 10004, États-Unis", opening_date: "1886/10/28")