require 'rails_helper'

RSpec.describe "Admin::Vendors", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/admin/vendors/index"
      expect(response).to have_http_status(:success)
    end
  end

end
