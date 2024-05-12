require "test_helper"

class EventsControllerTest < ActionDispatch::IntegrationTest
  test "index" do
    get "/events.json"
    assert_response 200

    data = JSON.parse(response.body)
    assert_equal Event.count, data.length
  end

  test "create" do
    assert_difference "Event.count", 1 do
      post "/events.json", params: { name: "Thunder vs Pelicans ", description: "Playoffs game", address: "100 W Reno Ave, Oklahoma City, OK 73102", image_url: "https://cdn.nba.com/davinci/images/team-matchups/nba/latest/web/okc-nop/1200x628.png", start_time: Time.now, end_time: Time.now }
      assert_response 200
    end
  end

  test "show" do
    get "/events/#{Event.first.id}.json"
    assert_response 200

    data = JSON.parse(response.body)
    assert_equal ["id", "name", "description", "address", "image_url", "start_time", "end_time", "created_at", "updated_at"], data.keys
  end

  test "update" do
    event = Event.first
    patch "/events/#{event.id}.json", params: { address: "Update address" }
    assert_response 200

    data = JSON.parse(response.body)

    assert_equal "Update address", data["address"]
  end

  test "destroy" do
    assert_difference "Event.count", -1 do
      delete "/events/#{Event.first.id}.json"
      assert_response 200
    end
  end
end
