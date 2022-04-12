FactoryBot.define do
  factory :product do
    name { Faker::Name.name }
    list_price { Faker::Number.between(to: 10, from: 50) }
    sell_price { Faker::Number.between(to: 1, from: 50) }
    on_sell { false }

    vendor
    category
  end
end
