export function EventsIndex(props) {
  return (
    <div>
      <div class="container-wrapper">
        {props.events.map((event, index) => (
          <div class={`container${index % 2 === 0 ? " even" : " odd"}`} key={event.id}>
            <h2>
              {event.home_team.full_name} vs {event.visitor_team.full_name}
            </h2>
            <img src={`/${event.home_team.abbreviation.toLowerCase()}.gif`} alt={`${event.home_team.full_name} logo`} />
            <img
              src={`/${event.visitor_team.abbreviation.toLowerCase()}.gif`}
              alt={`${event.visitor_team.full_name} logo`}
            />
            <p>Conference: {event.home_team.conference}</p>
            <p>City: {event.home_team.city}</p>
            <p>Date: {event.date}</p>
            {/* <p>end_time: {event.end_time}</p> */}
            <button onClick={() => props.onShowEvent(event)}>More Info</button> &nbsp;
            <button onClick={() => props.onShowFavorite(event)}>Favorite</button>
          </div>
        ))}
      </div>
    </div>
  );
}
