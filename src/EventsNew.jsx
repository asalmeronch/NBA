export function EventsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateEvent(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          image_url: <input name="image_url" type="text" />
        </div>
        <div>
          description: <input name="description" type="text" />
        </div>
        <div>
          addres: <input name="address" type="text" />
        </div>
        <div>
          start_time: <input name="start_time" type="text" />
        </div>
        <div>
          end_time: <input name="end_time" type="text" />
        </div>
        <button type="submit">Create event</button>
      </form>
    </div>
  );
}
