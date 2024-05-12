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
    <div>
      <h1>event information</h1>
      <p>name: {props.event.name}</p>
      <p>image_url: {props.event.image_url}</p>
      <p>description: {props.event.description}</p>
      <p>address: {props.event.address}</p>
      <p>start_time: {props.event.start_time}</p>
      <p>end_time: {props.event.end_time} </p>

      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.event.name} name="name" type="text" />
        </div>
        <div>
          image_url: <input defaultValue={props.event.image_url} name="image_url" type="text" />
        </div>
        <div>
          description: <input defaultValue={props.event.description} name="description" type="text" />
        </div>
        <div>
          addres: <input defaultValue={props.event.address} name="address" type="text" />
        </div>
        <div>
          start_time: <input defaultValue={props.event.start_time} name="start_time" type="text" />
        </div>
        <div>
          end_time: <input defaultValue={props.event.end_time} name="end_time" type="text" />
        </div>
        <button type="submit">Update event</button>
      </form>
      <button onClick={handleClick}>Destroy</button>
    </div>
  );
}
