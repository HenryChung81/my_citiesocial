FactoryBot.define do
  factory :order_item do
    order { nil }
    sku { "" }
    quantity { 1 }
  end
end
