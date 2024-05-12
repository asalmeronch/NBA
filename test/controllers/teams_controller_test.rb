require "test_helper"

class TeamsControllerTest < ActionDispatch::IntegrationTest
  test "index" do
    get "/teams.json"
    assert_response 200

    data = JSON.parse(response.body)
    assert_equal Team.count, data.length
  end
end
