class FavoritesController < ApplicationController
  def index
    # @favorite = current_user.favorites
    @favorites = Favorite.all
    render :index
  end

  def create
    event = Event.find_or_create_by(
      name: params[:name],
      description: params[:description],
      image_url: params[:image_url],
      address: params[:address],
      start_time: params[:start_time],
      end_time: params[:end_time],
    )
    @favorite = Favorite.find_or_create_by(
      user_id: current_user.id,
      event_id: event.id,
      favorite: "favorite",
    )
    render :show
  end

  def destroy
    favorite = Favorite.find_by(id: params[:id])
    favorite.update(favorite: "not")
    render json; { message: "REMOVED" }
  end
end
