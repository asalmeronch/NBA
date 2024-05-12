/* eslint-disable react/prop-types */
export function EventsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateEvent(props.event.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyEvent(props.event.id);
  };

  return (
    <div class="container-wrapper1">
      <div className="container5">
        <p>
          Score: {props.event.home_team_score} | {props.event.visitor_team_score}
        </p>
        {/* <p>image_url: {props.event.image_url}</p> */}
        <p>Season: {props.event.season}</p>
        <p></p>
        {/* <p>address: {props.event.address}</p> */}
        {/* <p>start_time: {props.event.start_time}</p>
      <p>end_time: {props.event.end_time} </p> */}

        <form onSubmit={handleSubmit}></form>
        {/* <button onClick={handleClick}>Destroy</button> */}
      </div>
    </div>
  );
}
