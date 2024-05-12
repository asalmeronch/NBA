export function TeamsIndex(props) {
  return (
    <div>
      {/* <h1 class="heading">ALL Teams</h1> */}
      <div class="team-wrapper">
        {props.teams.map((team) => (
          <div class="team" key={team.id}>
            <h2>{team.name}</h2>
            <img src={`/${team.abbreviation.toLowerCase()}.gif`} />
            <p>City: {team.city}</p>
            <p>Conference: {team.conference}</p>

            <button onClick={() => props.onShowTeam(team)}>More Info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
