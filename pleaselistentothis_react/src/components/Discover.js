import React, {useState, useEffect} from "react";
import TrackList from "../components/TrackList";
import axios from "axios";

function Discover() {

    const [tracks, setTracks] = useState([]);

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.accessToken)

    useEffect(() => {
      getTracks();
    }, [])

    const getTracks = function(){

    fetch("http://localhost:8080/tracks", {
       headers:{
         Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + user.accessToken,
          },
     })
        .then(res => res.json())
        .then(tracks => setTracks(tracks))
    }


  return (

      <>
      <h1>Discover</h1>
      <TrackList tracks={tracks} />
    </>
  )
}

export default Discover;