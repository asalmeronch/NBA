class EventsController < ApplicationController
  def index
    @events = Event.all
    render :index
  end

  def create
    @event = Event.create(
      name: params[:name],
      description: params[:description],
      address: params[:address],
      image_url: params[:image_url],
      start_time: params[:start_time],
      end_time: params[:end_time],

    )
    render :show
  end

  def show
    @event = Event.find_by(id: params[:id])
    render :show
  end

  def update
    @event = Event.find_by(id: params[:id])
    @event.update(
      name: params[:name] || @event.name,
      description: params[:description] || @event.description,
      address: params[:address] || @event.address,
      image_url: params[:image_url] || @event.image_url,
      start_time: params[:start_time] || @event.start_time,
      end_time: params[:end_time],

    )
    render :show
  end

  def destroy
    @event = Event.find_by(id: params[:id])
    event.destroy
    render json: { message: "Event destroyed" }
  end
end
