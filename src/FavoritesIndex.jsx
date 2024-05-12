import { useState, useEffect } from "react";

import axios from "axios";

export function FavoritesIndex(props) {
  const [favorites, setFavorites] = useState([]);

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  useEffect(handleIndexFavorites, []);

  return (
    <div>
      <h1>All Favorites</h1>
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.event.name}</h2>
        </div>
      ))}
    </div>
  );
}
