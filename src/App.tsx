import React from 'react';
import "./views/createserverpage.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Importing page modules from /view directory
import LandingPage from "./views/landingpage"
import CreateRoomPage from "./views/createroompage"
import JoinRoomPage from "./views/joinroom"
import HostGameRoom from "./views/hostgameroom"
import GameRoom from "./views/gameroom"

/* 
JSON-Server backed startup:
json-server --watch ./src/db.json --port 50501
*/

/*
** ToDo **
Trash collection
*later* Flash info to user that others have veto'd a movie
*/

function App() {
  return (
    <div>
      <Router>
        <div>
          <br />
        <a href="landingpage" style={{margin: "3%"}}> <b style={{fontSize: 25}}>Home </b> </a>
        
          <Switch>

            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path="/landingpage">
              <LandingPage />
            </Route>

            <Route path="/createroompage">
              <CreateRoomPage />
            </Route>

            <Route path="/joinroompage">
              <JoinRoomPage />
            </Route>

            <Route path="/hostgameroom">
              <HostGameRoom />
            </Route>

            <Route path="/gameroom">
              <GameRoom />
            </Route>
        
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;