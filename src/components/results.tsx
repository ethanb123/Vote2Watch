import React from 'react';
import Database from "../db.json";
import CookieService from './cookieservice';

// Array storing all the movie objects in the room
let ArrayOfMovies: any[] = [];

const Results = (props: any) => {
  
  // Maps out all movies in the database
  Database.movies.map((data, key) => {
      
    // Checks that the movie is in the same roomID as the users cookie. 
    // Pushes movie objects into ArrayOfMovies and sorts by votes
    if (data.movieRoomID.toString() === CookieService.get("RoomID") && Database.movies.length > 1){
      ArrayOfMovies.push(data)
      ArrayOfMovies.sort((a, b) => (b.votes > a.votes)? 1 : -1)
      console.log(ArrayOfMovies)
    }
    return <div />
  })

  // Returns results if there was a three way tie
  if(ArrayOfMovies[0]?.votes === ArrayOfMovies[1]?.votes && ArrayOfMovies[0]?.votes === ArrayOfMovies[2]?.votes){
    return (
      <h2>
        <span style={{color: "red"}}>{ArrayOfMovies[0]?.movieName}, {ArrayOfMovies[1]?.movieName}, {ArrayOfMovies[2]?.movieName}
        </span> are in a three way tie with <span style={{color: "red"}}>
        {ArrayOfMovies[0]?.votes}
        </span> votes
      </h2>
    )
  }

  // Returns results if there was a two way tie
  if(ArrayOfMovies[0]?.votes === ArrayOfMovies[1]?.votes){
    return (
      <h2>
        <span style={{color: "red"}}>{ArrayOfMovies[0]?.movieName}
        </span> is tied with <span style={{color: "red"}}>{ArrayOfMovies[1]?.movieName}
        </span> as winner with <span style={{color: "red"}}>
        {ArrayOfMovies[0]?.votes}
        </span> votes
      </h2>
    )
  }
  
  // Returns results if there is a single winner
  else{
    return (
      <h2> 
        <span style={{color: "red"}}>{ArrayOfMovies[0]?.movieName}
        </span> is the winner with <span style={{color: "red"}}>{ArrayOfMovies[0]?.votes}
        </span> votes
      </h2> 
    )
  }
}

export default Results;