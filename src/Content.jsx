import axios from "axios";
import { useState, useEffect } from "react";
import { EventsIndex } from "./EventsIndex";
import { EventsNew } from "./EventsNew";
import { EventsShow } from "./EventsShow";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { TeamsIndex } from "./TeamsIndex";
import { TeamsShow } from "./TeamsShow";
import { FavoritesIndex } from "./FavoritesIndex";

export function Content() {
  const [events, setEvents] = useState([]);
  const [teams, setTeams] = useState([]);

  const [isEventsShowVisible, setIsEventsShowVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});

  const [isTeamsShowVisible, setIsTeamsShowVisible] = useState(false);
  const [currentTeam, setCurrentTeam] = useState({});

  const handleIndexEvents = () => {
    console.log("handleIndexEvents");
    axios.get("http://localhost:3000/events.json").then((response) => {
      console.log(response.data);
      setEvents(response.data);
    });
  };

  const handleIndexTeams = () => {
    console.log("handleIndexTeams");
    axios.get("http://localhost:3000/teams.json").then((response) => {
      console.log(response.data);
      setTeams(response.data);
    });
  };

  const handleCreateEvent = (params, successCallback) => {
    console.log("handleCreateEvent", params);
    axios.post("http://localhost:3000/events.json", params).then((response) => {
      setEvents([...events, response.data]);
      successCallback();
    });
  };

  const handleShowEvent = (event) => {
    console.log("handleShowEvent", event);
    setIsEventsShowVisible(true);
    setCurrentEvent(event);
  };

  const handleShowTeam = (team) => {
    console.log("handleShowTeam", team);
    setIsTeamsShowVisible(true);
    setCurrentTeam(team);
  };

  const handleUpdateEvent = (id, params, successCallback) => {
    console.log("handleUpdateEvent", params);
    axios.patch(`http://localhost:3000/events/${id}.json`, params).then((response) => {
      setEvents(
        events.map((event) => {
          if (event.id === response.data.id) {
            return response.data;
          } else {
            return event;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyEvent = (id) => {
    console.log("handleDestroyEvent", id);
    axios.delete(`http://localhost:3000/events/${id}.json`).then((response) => {
      console.log(response);
      setEvents(events.filter((event) => event.id !== id));
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsEventsShowVisible(false);
  };

  const handleCloseTeams = () => {
    console.log("handleClose");
    setIsTeamsShowVisible(false);
  };

  useEffect(handleIndexEvents, []);
  useEffect(handleIndexTeams, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/events/new" element={<EventsNew onCreateEvent={handleCreateEvent} />} />
        <Route path="/events" element={<EventsIndex events={events} onShowEvent={handleShowEvent} />} />

        <Route path="/teams" element={<TeamsIndex teams={teams} onShowTeam={handleShowTeam} />} />

        <Route path="/favorites" element={<FavoritesIndex />} />
      </Routes>

      <Modal show={isEventsShowVisible} onClose={handleClose}>
        <EventsShow event={currentEvent} onUpdateEvent={handleUpdateEvent} onDestroyEvent={handleDestroyEvent} />
      </Modal>

      <Modal show={isTeamsShowVisible} onClose={handleCloseTeams}>
        <TeamsShow team={currentTeam} />
      </Modal>
    </div>
  );
}
