class TeamsController < ApplicationController
  def index
    response = HTTP
      .headers("Authorization" => ENV["BALL_DONT_LIE_API_KEY"])
      .get("https://api.balldontlie.io/v1/teams")
    data = response.parse
    render json: data["data"][0..29]
  end

  def show
    @event = Team.find_by(id: params[:id])
    render :show
  end
end
