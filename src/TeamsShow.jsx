/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

export function TeamsShow(props) {
  const [players, setPlayers] = useState([]);

  const handleIndexPlayers = () => {
    console.log("handleIndexPlayers");
    axios.get("http://localhost:3000/players.json?team_id=" + props.team.id).then((response) => {
      console.log(response.data);
      setPlayers(response.data);
    });
  };
  return (
    <div class="container2">
      <h1>Players</h1>
      <div class="container3">
        <h2>{props.team.name}</h2>
        <button onClick={handleIndexPlayers}>Players </button>

        {players.map((player) => (
          <div key={player.id}>
            <h2>{player.first_name + " " + player.last_name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
