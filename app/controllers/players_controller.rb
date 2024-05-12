class PlayersController < ApplicationController
  def index
    response = HTTP
      .headers("Authorization" => ENV["BALL_DONT_LIE_API_KEY"])
      .get("https://api.balldontlie.io/v1/players?team_ids[]=#{params[:team_id]}")
    data = response.parse
    render json: data["data"]
  end
end
